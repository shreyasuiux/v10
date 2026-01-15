/**
 * CENTRALIZED ROUTING - ALL ROUTES DEFINED HERE
 * 
 * STRICT RULES (NON-NEGOTIABLE):
 * - All routes defined ONLY in this file
 * - Page components MUST NOT contain routing logic
 * - No hardcoded window.location or history usage
 * - Navigation must be declarative using <Link /> and <NavLink />
 * - Browser URL must update correctly
 * - Direct URL access must work after hosting
 * 
 * React Router v6 Best Practices
 */

import React from 'react';
import { Routes, Route } from 'react-router';

// ============================================================================
// PAGE IMPORTS - All pages from /src/pages/
// ============================================================================

// Home
import { HomePage } from '@/pages/Home/Home.page';

// Services (7 pages)
import { CloudPractice } from '@/pages/Services/CloudPractice.page';
import { DigitalEngineering } from '@/pages/Services/DigitalEngineering.page';
import { BigData } from '@/pages/Services/BigData.page';
import { AppModernization } from '@/pages/Services/AppModernization.page';
import { Security } from '@/pages/Services/Security.page';
import { DatabaseManagement } from '@/pages/Services/DatabaseManagement.page';
import { ERPTesting } from '@/pages/Services/ERPTesting.page';

// AI Solutions (3 pages)
import { AI } from '@/pages/AI/AI.page';
import { BFSIAgents } from '@/pages/AI/BFSIAgents.page';
import { BrandManagement } from '@/pages/AI/BrandManagement.page';

// Products (6 pages)
import { AgentStudio } from '@/pages/Products/AgentStudio.page';
import { AtlasAPIManager } from '@/pages/Products/AtlasAPIManager.page';
import { OttohmVideo } from '@/pages/Products/OttohmVideo.page';
import { ITSMTicketing } from '@/pages/Products/ITSMTicketing.page';
import { AIOps } from '@/pages/Products/AIOps.page';
import { SmartContracts } from '@/pages/Products/SmartContracts.page';

// Who We Are (5 pages)
import { OurTeam } from '@/pages/WhoWeAre/OurTeam.page';
import { AboutUs } from '@/pages/WhoWeAre/AboutUs.page';
import { Partners } from '@/pages/WhoWeAre/Partners.page';
import { Careers } from '@/pages/WhoWeAre/Careers.page';
import { News } from '@/pages/WhoWeAre/News.page';

// Case Studies
import { CaseStudies } from '@/pages/CaseStudies/CaseStudies.page';

// ============================================================================
// ROUTE CONSTANTS - Type-safe paths
// ============================================================================

export const ROUTES = {
  HOME: '/',
  
  SERVICES: {
    CLOUD_PRACTICE: '/services/cloud-practice',
    DIGITAL_ENGINEERING: '/services/digital-engineering',
    BIG_DATA: '/services/big-data',
    APP_MODERNIZATION: '/services/app-modernization',
    SECURITY: '/services/security',
    DATABASE_MANAGEMENT: '/services/database-management',
    ERP_TESTING: '/services/erp-testing',
  },
  
  AI: {
    INDEX: '/ai',
    BFSI_AGENTS: '/ai/bfsi-agents',
    BRAND_MANAGEMENT: '/ai/brand-management',
  },
  
  PRODUCTS: {
    AGENT_STUDIO: '/products/agent-studio',
    ATLAS_API_MANAGER: '/products/atlas-api-manager',
    OTTOHM_VIDEO: '/products/ottohm-video',
    ITSM_TICKETING: '/products/itsm-ticketing',
    AI_OPS: '/products/ai-ops',
    SMART_CONTRACTS: '/products/smart-contracts',
  },
  
  WHO_WE_ARE: {
    OUR_TEAM: '/who-we-are/our-team',
    ABOUT_US: '/who-we-are/about-us',
    PARTNERS: '/who-we-are/partners',
    CAREERS: '/who-we-are/careers',
    NEWS: '/who-we-are/news',
  },
  
  CASE_STUDIES: '/case-studies',
} as const;

// ============================================================================
// APP ROUTES - All route definitions
// ============================================================================

export function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path={ROUTES.HOME} element={<HomePage />} />
      
      {/* Services */}
      <Route path={ROUTES.SERVICES.CLOUD_PRACTICE} element={<CloudPractice />} />
      <Route path={ROUTES.SERVICES.DIGITAL_ENGINEERING} element={<DigitalEngineering />} />
      <Route path={ROUTES.SERVICES.BIG_DATA} element={<BigData />} />
      <Route path={ROUTES.SERVICES.APP_MODERNIZATION} element={<AppModernization />} />
      <Route path={ROUTES.SERVICES.SECURITY} element={<Security />} />
      <Route path={ROUTES.SERVICES.DATABASE_MANAGEMENT} element={<DatabaseManagement />} />
      <Route path={ROUTES.SERVICES.ERP_TESTING} element={<ERPTesting />} />
      
      {/* AI Solutions */}
      <Route path={ROUTES.AI.INDEX} element={<AI />} />
      <Route path={ROUTES.AI.BFSI_AGENTS} element={<BFSIAgents />} />
      <Route path={ROUTES.AI.BRAND_MANAGEMENT} element={<BrandManagement />} />
      
      {/* Products */}
      <Route path={ROUTES.PRODUCTS.AGENT_STUDIO} element={<AgentStudio />} />
      <Route path={ROUTES.PRODUCTS.ATLAS_API_MANAGER} element={<AtlasAPIManager />} />
      <Route path={ROUTES.PRODUCTS.OTTOHM_VIDEO} element={<OttohmVideo />} />
      <Route path={ROUTES.PRODUCTS.ITSM_TICKETING} element={<ITSMTicketing />} />
      <Route path={ROUTES.PRODUCTS.AI_OPS} element={<AIOps />} />
      <Route path={ROUTES.PRODUCTS.SMART_CONTRACTS} element={<SmartContracts />} />
      
      {/* Who We Are */}
      <Route path={ROUTES.WHO_WE_ARE.OUR_TEAM} element={<OurTeam />} />
      <Route path={ROUTES.WHO_WE_ARE.ABOUT_US} element={<AboutUs />} />
      <Route path={ROUTES.WHO_WE_ARE.PARTNERS} element={<Partners />} />
      <Route path={ROUTES.WHO_WE_ARE.CAREERS} element={<Careers />} />
      <Route path={ROUTES.WHO_WE_ARE.NEWS} element={<News />} />
      
      {/* Case Studies */}
      <Route path={ROUTES.CASE_STUDIES} element={<CaseStudies />} />
    </Routes>
  );
}