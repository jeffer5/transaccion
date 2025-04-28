<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles_transferencia.css">
    <title>principal</title>
</head>
<body>
    
    <header id="head">
    
    <h1 id="tittle">Banco Digital</h1>

    </header>

    <?php
        
        if (isset($_POST['regi'])){

            $usu = $_POST['usur'];
        }

        echo '<p id="yo">usuario '.$usu.'</p>';

    ?>

    <p id="intro">Por favor escoga el tipo de servicio que desea realizar</p>
       
    <form action="" >

        <label for="" >Saldo actual <input type="number" id="sal" value="50000" disabled></label><br><br>

        <select name="opcion" id="select" onchange="campos(this.value)">
            <option> escoga </option>
            <option value="retiros"> retiros</option>
            <option value="consignaciones">Consignaciones</option>
            <option value="informacion_cuenta">Informacion cuenta</option>    
        </select>

        <section>
            <div id="retiros" style="display:none;">

                <label for="">
                valor a retirar
                <input type="number" placeholder="valor a retirar" id="ret"><br><br>
                </label>

                <label for="">
                Costo transaccion
                <input type="number"  id="cosre" value="6700" disabled><br>
                </label>

                <input type="button" name="" id="ret-but" value="retirar"  onclick="reti()">
            </div>

            <div id="consignaciones"  style="display:none;">

                <label for="">
                valor a consignar
                <input type="number" placeholder="valor a consignar" id="val"><br><br>
                </label>

                <label for="">
                Costo transaccion
                <input type="number"  id="cosco" value="6700" disabled><br>
                </label>

                <input type="button" name="" id="con" value="consignar" onclick="cong()">

            </div>

            <div id="informacion_cuenta" style="display:none;">


                <p>Datos</p>
                <?php
            
                    if (isset($_POST['regi'])){

                        $nom = $_POST['nom'];
                        $tipd = $_POST['tipd'];
                        $ndoc = $_POST['ndoc'];
                        $ncel = $_POST['ncel'];
                        $usur = $_POST['usur'];
                        $pasr = $_POST['pasr'];

                    }
            
                    echo 'Nombre: '.$nom.'<br>';
                    echo 'Tipo de documento: '.$tipd.'<br>';
                    echo 'Numero de documento: '.$ndoc.'<br>';
                    echo 'Numero celular: '.$ncel.'<br>';
                    echo 'Usuario: '.$usur.'<br>';
                    echo 'Contrasena: '.$pasr.'<br>';
            
                ?>
                        
            </div>

        </section>

    </form>


    <button onclick="salir()" id="salir"><a href="transferencia.html" id="salir">salir</a></button>
   
    


    <script src="inicio_sesion.js"></script>
</body>
</html>