import React, { useState, useEffect, useRef } from "react";

export default function SectionLabel({ text }) {
  return (
    <div className="sec-label reveal">
      <span className="sec-label-dot">◆</span>
      <span>{text}</span>
      <div className="sec-label-line" />
    </div>
  );
}