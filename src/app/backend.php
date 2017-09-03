<?php

class mySQLDatabaseManager {
    private $pdo = null;
    
    private $host           = "localhost";
    private $username       = "root";
    private $password       = "asdasd";
    private $dbname         = "szufla";
    private $charset        = 'utf8';

    public function init() {
        header('Access-Control-Allow-Origin: *');
        $this->pdo = new PDO('mysql:host=localhost;dbname=szufla;charset=utf8', 'root', 'asdasd');
    }

    public function getPlayers() {
        $this->init();

        $sqlQuery = 'SELECT * FROM members WHERE active = 1 ORDER BY name ASC';

        if(isset($_GET['limit'])) {
            $sqlQuery .= " LIMIT " . $_GET['limit'];
        }

        $stmt = $this->pdo->prepare($sqlQuery);

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($results);
        $this->pdo = null;
    }

    public function getManagers() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM members WHERE management <> "" ORDER BY name ASC');

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($results);
        $this->pdo = null;
    }

    public function getPassives() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM members WHERE active = 0 ORDER BY name ASC');

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($results);
        $this->pdo = null;
    }

    public function createNews() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('INSERT INTO news (title, description, content) VALUES (:title, :description, :content)');

        $stmt->bindParam(':title', $requestedData->title, PDO::PARAM_STR);
        $stmt->bindParam(':description', $requestedData->description, PDO::PARAM_STR);
        $stmt->bindParam(':content', $requestedData->newsContent, PDO::PARAM_STR);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function editNews() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('UPDATE news SET title = :title, description = :description, content = :content WHERE id = :id');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        $stmt->bindParam(':title', $requestedData->title, PDO::PARAM_STR);
        $stmt->bindParam(':description', $requestedData->description, PDO::PARAM_STR);
        $stmt->bindParam(':content', $requestedData->newsContent, PDO::PARAM_STR);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function getNewsById() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM news WHERE id = :id');

        $stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT);

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($results);
        $this->pdo = null;
    }

    public function getNews() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM news ORDER BY id DESC');

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($results);
        $this->pdo = null;
    }

    public function deleteNews() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('DELETE FROM news WHERE id = :id');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function uploadImage() {
        // Get filename.
        $temp = explode(".", $_FILES["fileToUpload"]["name"]);

        // Get extension.
        $extension = end($temp);

        // Generate random new name
        $name = sha1(microtime()) . "." . $extension;

        $target_dir = "uploads/";
        $target_file = $target_dir . $name;

        $uploadOk = 1;
        $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }
        // Check if file already exists
        if (file_exists($target_file)) {
            echo "Sorry, file already exists.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 500000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif" ) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
                
                // Generate response.
                $response = new StdClass;
                $response->link = "http://localhost/" . $target_file;
                echo stripslashes(json_encode($response));

            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }
    }
}

$db = new mySQLDatabaseManager();

switch ($_GET['action']) {
    case 'getTournaments':      $db->getTournaments(); break;
    case 'getPlayers':          $db->getPlayers(); break;
    case 'getManagers':         $db->getManagers(); break;
    case 'getPassives':         $db->getPassives(); break;
    case 'createNews':          $db->createNews(); break;
    case 'editNews':            $db->editNews(); break;
    case 'getNewsById':         $db->getNewsById(); break;
    case 'getNews':             $db->getNews(); break;
    case 'deleteNews':          $db->deleteNews(); break;
    case 'uploadImage':         $db->uploadImage(); break;
}

?>