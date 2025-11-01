type Props = {
    Numero: number;
    Nombre: string;
    Tipo: string;
    Ataque: number;
    Defensa: number;
    Descripcion: string;
    Imagen: string;
}
function CardDetail({
    Ataque,
    Defensa,
 Descripcion,
    Imagen,
    Nombre,
    Numero,
    Tipo,

}:Props){
    return(
<div>
    <h3>
        {Nombre}(#{Numero})
    </h3>
    <img src= {Imagen} alt={Nombre} />
  <p>Tipo: {Tipo}</p>
  <p>Ataque: {Ataque}</p>
  <p>Defensa:{Defensa}</p>
  <p> {Descripcion}</p>
</div>
);
}
export default CardDetail;
