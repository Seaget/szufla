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
        $this->pdo = new PDO('mysql:host=localhost;dbname=szufla', 'root', 'asdasd');
    }

    public function coding2JSON($results) {
        /*foreach($results as &$result) {
            foreach($result as &$item)
                $item = base64_encode($item);
        }*/

        header('Content-Type: application/json');
        return json_encode($results);
    }

    public function getUsers() {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT * FROM user');

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo $this->coding2JSON($results);
        $this->pdo = null;
    }

    public function loginProcess($username, $password) {
        $this->init();

        $stmt = $this->pdo->prepare('SELECT count(*) as userExist FROM user WHERE nickName = :username AND password = :password');
        $stmt->bindValue(':username', $username);
        $stmt->bindValue(':password', $password);

        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if(count($results) == 1) {
            echo true;
        } else {
            echo false;
        }

        $this->pdo = null;
    }
}

$db = new mySQLDatabaseManager();

$request_body = file_get_contents('php://input');
$requestedData = json_decode($request_body);

switch ($requestedData->action) {
    case 'loginProcess':    $db->loginProcess($requestedData->username, $requestedData->password); break;

    default:
    case 'getUsers':        $db->getUsers(); break;
}

?>