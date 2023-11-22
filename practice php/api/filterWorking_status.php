<?php 
require_once "DbCon.php";
$status=true;
$working_status_id = $_POST['working_status_id'];

try{


if($working_status_id ){
    $statement2 = $pdo->prepare(" select  * from employees as e  join working_status as ws on ws.id=e.working_status_id where e.working_status_id=?");
    $statement2->execute([$working_status_id ]);
    $result2= $statement2->fetchAll(PDO::FETCH_ASSOC);
}else{
    $statement2 = $pdo->prepare("select  * from employees as e  join working_status as ws on ws.id=e.working_status_id ");
    $statement2->execute([]);
    $result2= $statement2->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode(["status"=>true,"message"=>"Data found successfully","data"=>$result2]);
}
catch(PDOException $e){
         $response=["status"=>false,"message"=> $e->getMessage()];
    echo json_encode($response);
    return;
}
?>