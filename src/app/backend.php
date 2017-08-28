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

    public function saveNews() {
        $this->init();
        
        $request_body = file_get_contents('php://input');
        $requestedData = json_decode($request_body);

        $stmt = $this->pdo->prepare('INSERT INTO news (id, title, description, content) VALUES (:id, :title, :description, :content)');
        $stmt->bindParam(':id', $requestedData->id, PDO::PARAM_INT);
        $stmt->bindParam(':title', $requestedData->title, PDO::PARAM_STR);
        $stmt->bindParam(':description', $requestedData->description, PDO::PARAM_STR);
        $stmt->bindParam(':content', $requestedData->newsData, PDO::PARAM_STR);
        
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
}

$db = new mySQLDatabaseManager();

switch ($_GET['action']) {
    case 'getTournaments':      $db->getTournaments(); break;
    case 'getPlayers':          $db->getPlayers(); break;
    case 'getManagers':         $db->getManagers(); break;
    case 'getPassives':         $db->getPassives(); break;
    case 'saveNews':            $db->saveNews(); break;
    case 'getNewsById':         $db->getNewsById(); break;
    case 'getNews':             $db->getNews(); break;
    case 'deleteNews':          $db->deleteNews(); break;
}

?>