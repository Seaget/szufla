<?php

class mySQLDatabaseManager {
    private $pdo = null;
    
    private $host           = "c057um.forpsi.com";
    private $username       = "b3764";
    private $password       = "23@KCu5B";
    private $dbname         = "b3764";
    private $charset        = 'utf8';

    public function init() {
        header('Access-Control-Allow-Origin: *');
        $this->pdo = new PDO('mysql:host=c057um.forpsi.com;dbname=b3764;charset=utf8', 'b3764', '23@KCu5B');
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

        $stmt = $this->pdo->prepare('INSERT INTO news (title, cover, description, date, content) VALUES (:title, :cover, :description, :date, :content)');

        $stmt->bindParam(':title', $requestedData->title, PDO::PARAM_STR);
        $stmt->bindParam(':cover', $requestedData->cover, PDO::PARAM_STR);
        $stmt->bindParam(':description', $requestedData->description, PDO::PARAM_STR);
        $stmt->bindParam(':date', date("Y-m-d"), PDO::PARAM_STR);   
        $stmt->bindParam(':content', $requestedData->newsContent, PDO::PARAM_STR);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function createEvent() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('INSERT INTO tournaments (title, location, start, end, position) VALUES (:title, :location, :start, :end, :position)');

        $stmt->bindParam(':title', $requestedData->title, PDO::PARAM_STR);
        $stmt->bindParam(':location', $requestedData->location, PDO::PARAM_STR);
        $stmt->bindParam(':start', $requestedData->start, PDO::PARAM_STR);
        $stmt->bindParam(':end', $requestedData->end, PDO::PARAM_STR);
        $stmt->bindValue(':position', "", PDO::PARAM_STR);

        $stmt->execute();

        $this->pdo = null;
    }

    public function createMember() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('INSERT INTO members (name, number, position, weight, height, nationality, dateofbirth, management, profilePicName, active) 
            VALUES (:name, :number, :position, :weight, :height, :nationality, :dateofbirth, :management, :profilePicName, :active)');

        $stmt->bindParam(':name', $requestedData->name, PDO::PARAM_STR);
        $stmt->bindParam(':number', $requestedData->number, PDO::PARAM_INT);
        $stmt->bindParam(':position', $requestedData->position, PDO::PARAM_STR);
        $stmt->bindParam(':weight', $requestedData->weight, PDO::PARAM_INT);
        $stmt->bindParam(':height', $requestedData->height, PDO::PARAM_INT);
        $stmt->bindParam(':nationality', $requestedData->nationality, PDO::PARAM_STR);
        $stmt->bindParam(':dateofbirth', $requestedData->dateofbirth, PDO::PARAM_STR);
        $stmt->bindParam(':management', $requestedData->management, PDO::PARAM_STR);
        $stmt->bindParam(':profilePicName', $requestedData->profilePicName, PDO::PARAM_STR);
        $stmt->bindParam(':active', $requestedData->active, PDO::PARAM_INT);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function editNews() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('UPDATE news SET title = :title, cover = :cover, description = :description, content = :content WHERE id = :id');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        $stmt->bindParam(':title', $requestedData->title, PDO::PARAM_STR);
        $stmt->bindParam(':cover', $requestedData->cover, PDO::PARAM_STR);
        $stmt->bindParam(':description', $requestedData->description, PDO::PARAM_STR);
        $stmt->bindParam(':content', $requestedData->newsContent, PDO::PARAM_STR);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function editEvent() {
        $this->init();

        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('UPDATE tournaments SET title = :title, location = :location, start = :start, end = :end WHERE id = :id');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        $stmt->bindParam(':title', $requestedData->title, PDO::PARAM_STR);
        $stmt->bindParam(':location', $requestedData->location, PDO::PARAM_STR);
        $stmt->bindParam(':start', $requestedData->start, PDO::PARAM_STR);
        $stmt->bindParam(':end', $requestedData->end, PDO::PARAM_STR);

        $stmt->execute();

        $this->pdo = null;
    }

    public function editMember() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('UPDATE members SET name = :name, number = :number, position = :position, weight = :weight,
            height = :height, nationality = :nationality, dateofbirth = :dateofbirth, management = :management,
            profilePicName = :profilePicName, active = :active WHERE id = :id');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        $stmt->bindParam(':name', $requestedData->name, PDO::PARAM_STR);
        $stmt->bindParam(':number', $requestedData->number, PDO::PARAM_INT);
        $stmt->bindParam(':position', $requestedData->position, PDO::PARAM_STR);
        $stmt->bindParam(':weight', $requestedData->weight, PDO::PARAM_INT);
        $stmt->bindParam(':height', $requestedData->height, PDO::PARAM_INT);
        $stmt->bindParam(':nationality', $requestedData->nationality, PDO::PARAM_STR);
        $stmt->bindParam(':dateofbirth', $requestedData->dateofbirth, PDO::PARAM_STR);
        $stmt->bindParam(':management', $requestedData->management, PDO::PARAM_STR);
        $stmt->bindParam(':profilePicName', $requestedData->profilePicName, PDO::PARAM_STR);
        $stmt->bindParam(':active', $requestedData->active, PDO::PARAM_INT);
        
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

    public function getEventById() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM tournaments WHERE id = :id');

        $stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT);

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($results);
        $this->pdo = null;
    }

    public function getMemberById() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM members WHERE id = :id');

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

    public function getEvents() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM tournaments ORDER BY id DESC');

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($results);
        $this->pdo = null;
    }

    public function getMembers() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM members ORDER BY name ASC');

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

    public function deleteMember() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('DELETE FROM members WHERE id = :id');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function deleteEvent() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('DELETE FROM tournaments WHERE id = :id');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        
        $stmt->execute();

        $this->pdo = null;
    }

    public function uploadImage() {
        // Get filename.
        $temp = explode(".", $_FILES["fileToUpload"]["name"]);

        // Get extension.
        $extension = end($temp);
        
        if(isset($_GET['type']) && $_GET['type'] == "member") { 
            $name = $temp[0] . "." . $extension;
            $target_dir = "assets/images/members/";
        } else {
            // Generate random new name
            $name = sha1(microtime()) . "." . $extension;

            $target_dir = "uploads/";   
        }

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
        if ($_FILES["fileToUpload"]["size"] > 5000000) {
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
                $response->link = $target_file;
                echo stripslashes(json_encode($response));
            //    echo "Uploading...";

            } else {
                echo "Sorry, there was an error uploading your file.";
            }
            //echo "Uploading...";
        }
    }

    public function doLogin() {
        $this->init();

        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);
        
        $stmt = $this->pdo->prepare('SELECT count(*) as userCount FROM users WHERE username = :username AND password = :password');
        $stmt->bindParam(':username', $requestedData->username, PDO::PARAM_STR);
        $stmt->bindParam(':password', $requestedData->password, PDO::PARAM_STR);

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $isAuth = ('1' === $results[0]['userCount']);
        $this->pdo = null;

        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json; charset=utf-8;');
        echo json_encode($isAuth);
    }
}

$db = new mySQLDatabaseManager();

switch ($_GET['action']) {
    case 'getEvents':           $db->getEvents(); break;
    case 'getPlayers':          $db->getPlayers(); break;
    case 'getManagers':         $db->getManagers(); break;
    case 'getPassives':         $db->getPassives(); break;
    case 'createNews':          $db->createNews(); break;
    case 'editNews':            $db->editNews(); break;
    case 'getNewsById':         $db->getNewsById(); break;
    case 'getNews':             $db->getNews(); break;
    case 'deleteNews':          $db->deleteNews(); break;
    case 'uploadImage':         $db->uploadImage(); break;
    case 'getMembers':          $db->getMembers(); break;
    case 'getMemberById':       $db->getMemberById(); break;
    case 'editMember':          $db->editMember(); break;
    case 'createMember':        $db->createMember(); break;
    case 'deleteMember':        $db->deleteMember(); break;
    case 'getEventById':        $db->getEventById(); break;
    case 'editEvent':           $db->editEvent(); break;
    case 'createEvent':         $db->createEvent(); break;
    case 'deleteEvent':         $db->deleteEvent(); break;
    case 'doLogin':             $db->doLogin(); break;
}

?>