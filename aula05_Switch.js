"use strict"

var tipoEstabelecimento = "I";

switch(tipoEstabelecimento)
{
    case "C":
    {
        console.log("Comercio");
        break;
    }

    case "I":
    {
        console.log("Industria");
        break;
    }

    case "O":
    {
        console.log("ONG");
        break;
    }

    default:
    {
        console.log("Estabelecimento não identificado");
        break;
    }
}