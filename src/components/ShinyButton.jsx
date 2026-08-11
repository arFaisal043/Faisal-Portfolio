import React, { useState, useEffect, useRef } from "react";

export default function ShinyButton({ children, onClick, href, outline = false, className = "", style = {} }) {
  const cls = `shiny-cta${outline ? " shiny-outline" : ""} ${className}`;
  if (href) return <a href={href} className={cls} style={style}><span>{children}</span></a>;
  return <button className={cls} onClick={onClick} style={style}><span>{children}</span></button>;
}