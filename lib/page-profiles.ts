export const pageProfiles: Record<string, { tagline: string; sections: string[]; outcomes: string[] }> = {
  About: {
    tagline: 'Engineer-founder profile grounded in systems delivery and product strategy.',
    sections: ['Identity', 'Operating Principles', 'Engineering Journey', 'Leadership Narrative', 'Execution Model', 'Decision Framework', 'Collaboration Style', 'Value Proposition'],
    outcomes: ['12+ systems shipped', '8 architecture case studies', '20 technologies mapped']
  },
  Vision: {
    tagline: 'Long-horizon vision for scalable digital products and resilient teams.',
    sections: ['North Star', 'Market Lens', 'System Outcomes', 'Platform Strategy', 'Innovation Horizon', 'Risk Posture', 'Investment Focus', 'Milestone Gates'],
    outcomes: ['3-year architecture roadmap', 'Platform-first strategy', 'Outcome-oriented planning']
  }
};

export const defaultProfile = {
  tagline: 'Senior-level engineering narrative with architecture traceability and measurable execution depth.',
  sections: [
    'Strategic Overview',
    'Systems Thinking',
    'Implementation Blueprint',
    'Technology Alignment',
    'Architecture Notes',
    'Scalability Plan',
    'Security and Compliance',
    'Operational Excellence',
    'Roadmap',
    'Risks and Mitigations'
  ],
  outcomes: ['Reliability targets defined', 'Performance posture documented', 'Delivery workflow standardized']
};
