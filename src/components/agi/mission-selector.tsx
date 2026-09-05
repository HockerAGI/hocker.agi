"use client";
import{useState}from"react";
import{PUBLIC_MISSIONS}from"@/content/agi/public-missions";
import{SpecialistFlow}from"./specialist-flow";
import{trackPublicEvent}from"@/lib/analytics/events";
export function MissionSelector(){const[selected,setSelected]=useState(PUBLIC_MISSIONS[0].id);const m=PUBLIC_MISSIONS.find(x=>x.id===selected)??PUBLIC_MISSIONS[0];return <div className="agi-mission-layout"><div className="mission-buttons" role="group" aria-label="Misión de ejemplo">{PUBLIC_MISSIONS.map(x=><button type="button" key={x.id} className="mission-button" aria-pressed={selected===x.id} onClick={()=>{setSelected(x.id);trackPublicEvent("agi_mission_selected",{mission:x.id,funnel:"corporate"})}}>{x.label}</button>)}</div><div><p className="h-eyebrow">DEMO INTERACTIVA</p><h3 className="h-h3">{m.label}</h3><p className="h-copy">{m.summary}</p><SpecialistFlow specialists={m.specialists}/><p className="agi-note">La experiencia muestra cómo coordinamos especialidades. Las decisiones de mayor impacto siempre pasan por revisión y autorización antes de ejecutarse.</p></div></div>}
