<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Pertemuan 1 - PHP</title>
    <style>
        body { font-family: sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 400px; border: 1px solid #ccc; padding: 20px; border-radius: 8px; }
        .result { margin-top: 20px; padding: 15px; border-radius: 5px; }
        .lulus { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .remedial { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        input { width: 100%; padding: 8px; margin: 8px 0; display: block; box-sizing: border-box; }
        button { padding: 10px 15px; background: #007bff; color: white; border: none; cursor: pointer; }
    </style>
</head>

<body>
    <div class="container">
        <h2>Input Nilai Mahasiswa</h2>
        <form method="POST">
            <label>Nama:</label>
            <input type="text" name="nama" required placeholder="Masukkan nama">

            <label>Email:</label>
            <input type="text" name="email" required placeholder="nama@mhs.ac.id">

            <label>Nilai:</label>
            <input type="number" name="nilai" required min="0" max="100">

            <button type="submit" name="submit">Proses Data</button>
        </form>

        <?php
        if(isset($_POST['submit'])){
            $nama = htmlspecialchars($_POST['nama']);
            $email = htmlspecialchars($_POST['email']);
            $nilai = $_POST['nilai'];

            if($nilai >= 70){
                $status = "Lulus";
                $class = "lulus";
            } else {
                $status = "Remedial";
                $class = "remedial";
            }

            echo "<div class='result $class'>";
            echo "<strong> Hasil Pengolahan: </strong><br>";
            echo "Nama: $nama <br>";
            echo "Email: $email <br>";
            echo "Nilai: $nilai <br>";
            echo "Status: <strong>$status</strong><br>";
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>