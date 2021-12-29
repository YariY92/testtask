<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Table</title>
</head>
<body>
  <?php 
  $host = 'localhost';
  $user = 'root';
  $password = '';
  $dbname = 'job-task';
  
  $con =mysqli_connect($host, $user, $password, $dbname);
  if(!$con) {
      die("connection failed: ".mysqli_connect_error());
  }

  $selec = mysqli_query($con, 'SELECT `email`, `date` FROM `jtable`');
  $x = [];
  while ($result = mysqli_fetch_array($selec)){
  
        $x[] = $result;
        };
        
         
    
  ?>
    <h1>Press on email to delete it</h1>
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for email..">

    <table id="myTable">
      <tr >
          <th>Id</th>
        <th onclick="sortTable(1)" >Email</th>
        <th onclick="sortTable(2)" >Date</th>
      </tr>
      <?php 
      foreach($x as $k=>$v){ ?>
      <tr>
        <td><?=$k+1;?></td> 
        <td><?php echo $v['email']; ?></td>
        <td><?php echo $v['date']; ?></td>
      </tr>
      <?php } ?>
      
    </table>

    <script src="table.js"></script>
</body>
</html>