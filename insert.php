<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$json = file_get_contents('php://input');

$data = json_decode($json, true);
$email = $data['email'];
$user1 = new User();

return $user1->checkData($email);
class User {
    private $connectBd;
    function __construct(){
        $this->connectBd = $this->getConnection();
    }

    private function getConnection() {
        $host = 'localhost';
        $user = 'root';
        $password = '';
        $dbname = 'job-task';

        $con =mysqli_connect($host, $user, $password, $dbname);
        if(!$con) {
            die("connection failed: ".mysqli_connect_error());
        }

        return $con;
    }

    public function checkData($email) {
        $sub = ".co";
        if(empty($email)){
            exit ("Email address is required");
        }
       else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            exit ("Please provide a valid e-mail address");
        }
        else if(str_ends_with($email, $sub)){
            exit ("We are not accepting subscriptions from Colombia emails");
        }
        else {
          return $this->addData($email);
        }
    }

    public function selectData(){
    $selec = mysqli_query($this->connectBd, 'SELECT `email` FROM `jtable`');
    while ($result = mysqli_fetch_array($selec)){
        echo "{$result['email']}<br>";
        };
}

    public function addData($email){
        try {
            $query = "INSERT INTO jtable (email) VALUES ('$email')";
            mysqli_query($this->connectBd, $query);
            printf("ID новой записи: %d.\n", mysqli_insert_id($this->connectBd));

        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }

}