export type PublicEventName="hero_solution_click"|"goal_selected"|"solution_opened"|"product_opened"|"case_opened"|"portfolio_evidence_opened"|"cv_downloaded"|"agi_mission_selected"|"contact_started"|"lead_submitted"|"whatsapp_handoff";
declare global{interface Window{dataLayer?:Record<string,unknown>[]}}
export function trackPublicEvent(name:PublicEventName,params:Record<string,string|number|boolean>={}){if(typeof window==="undefined")return;window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:name,...params})}
