import React from "react";
import style from './Botao.modele.scss'

export default function Botao({children}) {
    return (
      <button className={style.botao}>{children}</button>
    )
  }