botContext.setAllowMaxTextResponse(true);
//logEventAdv('', 'Seguimiento De Tarjeta', 'TC En sucursal');
if (esCreditoTarjeta_SEGTA(get_tarjeta_usuario_SEGTA())) logEventAdv('', 'Seguimiento De Tarjeta', 'TC En sucursal');
if (esDebitoTarjeta_SEGTA(get_tarjeta_usuario_SEGTA())) logEventAdv('', 'Seguimiento De Tarjeta', 'TD En sucursal');
logEventAdv('', 'Seguimiento De Tarjeta', 'En sucursal sin datos');

 //modificado:
if (esCreditoTarjeta_SEGTA(get_tarjeta_usuario_SEGTA())) {
    logEventAdv('', 'Seguimiento De Tarjeta', 'TC En sucursal');
} else if (esDebitoTarjeta_SEGTA(get_tarjeta_usuario_SEGTA())) {
    logEventAdv('', 'Seguimiento De Tarjeta', 'TD En sucursal');
} else {
    logEventAdv('', 'Seguimiento De Tarjeta', 'En sucursal sin datos');
}

module.exports = {
    tarjetaEnSucursal,
    enSucursal,
    noTeEncontramos,
    enDistribucion,
    domicilio,
    rendidaBanco,
    variasTarjetas,
    unaTarjeta,
    estadoActualDistintoDeTraces,
    estadoFueraSinRastroEnTraces,
    estadoYaPresenteEnTraces,
    estadoUnicoRepetido,
    estadoMultipleDiferente,
    estadoIncluidoEnMuchos,
    estadoExcluidoEnMuchos,
    unaTarjetaElejida,
    tarjetaElejidaSucursal,//Seguimiento
    seguimientoSegundaVisita,
    envioPiezaSeMudo, //Envio
    SeguimientoPiezaSeMudo,
//    flashEstadoEnSucursal, //Seguimiento
//    envioVariasFlash //Envio
};

//CODIGO EN INTERACCION t_en SUCURSAL v2:

botContext.setAllowMaxTextResponse(true);
//logEventAdv('', 'Seguimiento De Tarjeta', 'TC En sucursal');
if (esCreditoTarjeta_SEGTA(get_tarjeta_usuario_SEGTA())) {
    logEventAdv('', 'Seguimiento De Tarjeta', 'TC En sucursal');
} else if (esDebitoTarjeta_SEGTA(get_tarjeta_usuario_SEGTA())) {
    logEventAdv('', 'Seguimiento De Tarjeta', 'TD En sucursal');
} else {
    logEventAdv('', 'Seguimiento De Tarjeta', 'En sucursal sin datos');
}
