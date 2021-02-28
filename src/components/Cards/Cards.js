import PillBotton from './PillBotton';
function Cards (){
  //JSX 
  return (
    <section className="Cards">
      <h2>Toyota</h2>
      <p>
      Toyota Motor Corporation ​ más conocida como Toyota, es una compañía japonesa de fabricación de automóviles. Fundada en 1933 por Kiichiro Toyoda, su sede central se encuentra en Toyota y Bunkyō aunque, por su carácter multinacional, cuenta con fábricas y sedes en varios países.​
      </p>
      <div>
        <PillBotton text="Realizar el pedido" type="submit" click={(e) => { alert("Click Realizar el pedido");}}></PillBotton>
        <PillBotton text="Enviar al carrito" type="submit" click={(e) => { alert("Click Enviar al carrito"); }}></PillBotton>

      </div>
    </section>
  );
}

export default Cards;
