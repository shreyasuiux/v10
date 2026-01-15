/**
 * ASSET MANIFEST - PRODUCTION-SAFE ASSET CONFIGURATION
 * 
 * CRITICAL RULES (ZERO TOLERANCE):
 * ❌ NO figma:asset imports anywhere
 * ✅ All images in /src/assets/images/
 * ✅ Relative path imports: @/assets/images/...
 * ✅ App must never crash on missing assets
 * 
 * ASSET ORGANIZATION:
 * /src/assets/images/
 *   ├── home/          # Home page / Desktop72 assets (20 images)
 *   ├── about/         # About Us page assets (33 images)
 *   ├── team/          # Our Team page assets (8 images)
 *   ├── erp/           # ERP Testing page assets (1 image)
 *   └── security/      # Security page assets (1 image)
 * 
 * Total: 63 assets
 */

// ============================================================================
// HOME PAGE / DESKTOP72 ASSETS (20 images)
// ============================================================================

export const homeAssets = {
  // Background images
  background: '/src/assets/images/home/background.png',
  background1: '/src/assets/images/home/background1.png',
  
  // Use case / feature images (7 images)
  unsplashImage1: '/src/assets/images/home/use-case-1.png',
  unsplashImage2: '/src/assets/images/home/use-case-2.png',
  unsplashImage3: '/src/assets/images/home/use-case-3.png',
  unsplashImage4: '/src/assets/images/home/use-case-4.png',
  unsplashImage5: '/src/assets/images/home/use-case-5.png',
  unsplashImage6: '/src/assets/images/home/use-case-6.png',
  unsplashImage7: '/src/assets/images/home/use-case-7.png',
  
  // Video thumbnails (6 images)
  videoThumbnail1: '/src/assets/images/home/video-thumb-1.png',
  videoThumbnail2: '/src/assets/images/home/video-thumb-2.png',
  videoThumbnail3: '/src/assets/images/home/video-thumb-3.png',
  videoThumbnail4: '/src/assets/images/home/video-thumb-4.png',
  videoThumbnail5: '/src/assets/images/home/video-thumb-5.png',
  videoThumbnail6: '/src/assets/images/home/video-thumb-6.png',
  
  // Case study images
  caseStudyReligare: '/src/assets/images/home/case-study-religare.png',
  abhijitShah: '/src/assets/images/home/abhijit-shah.png',
  
  // Textures
  texture: '/src/assets/images/home/texture.png',
  noiseTexture: '/src/assets/images/home/noise-texture.png',
  
  // Career opportunities
  careerOpportunities: '/src/assets/images/home/career-opportunities.png',
};

// ============================================================================
// ABOUT US PAGE ASSETS (33 images)
// ============================================================================

export const aboutUsAssets = {
  // Our Initiatives Images (6 images)
  initiative1: '/src/assets/images/about/initiative-1.png',
  initiative2: '/src/assets/images/about/initiative-2.png',
  initiative3: '/src/assets/images/about/initiative-3.png',
  initiative4: '/src/assets/images/about/initiative-4.png',
  initiative5: '/src/assets/images/about/initiative-5.png',
  initiative6: '/src/assets/images/about/initiative-6.png',
  
  // ACC Sports & Culture Images (15 images)
  sports1: '/src/assets/images/about/sports-1.png',
  sports2: '/src/assets/images/about/sports-2.png',
  sports3: '/src/assets/images/about/sports-3.png',
  sports4: '/src/assets/images/about/sports-4.png',
  sports5: '/src/assets/images/about/sports-5.png',
  sports6: '/src/assets/images/about/sports-6.png',
  sports7: '/src/assets/images/about/sports-7.png',
  sports8: '/src/assets/images/about/sports-8.png',
  sports9: '/src/assets/images/about/sports-9.png',
  sports10: '/src/assets/images/about/sports-10.png',
  sports11: '/src/assets/images/about/sports-11.png',
  sports12: '/src/assets/images/about/sports-12.png',
  sports13: '/src/assets/images/about/sports-13.png',
  sports14: '/src/assets/images/about/sports-14.png',
  sports15: '/src/assets/images/about/sports-15.png',
  
  // Rewards and Recognition Images (12 images)
  rewards1: '/src/assets/images/about/rewards-1.png',
  rewards2: '/src/assets/images/about/rewards-2.png',
  rewards3: '/src/assets/images/about/rewards-3.png',
  rewards4: '/src/assets/images/about/rewards-4.png',
  rewards5: '/src/assets/images/about/rewards-5.png',
  rewards6: '/src/assets/images/about/rewards-6.png',
  rewards7: '/src/assets/images/about/rewards-7.png',
  rewards8: '/src/assets/images/about/rewards-8.png',
  rewards9: '/src/assets/images/about/rewards-9.png',
  rewards10: '/src/assets/images/about/rewards-10.png',
  rewards11: '/src/assets/images/about/rewards-11.png',
  rewards12: '/src/assets/images/about/rewards-12.png',
};

// ============================================================================
// OUR TEAM PAGE ASSETS (8 images)
// ============================================================================

export const teamAssets = {
  nilesh: '/src/assets/images/team/nilesh.png',
  rogin: '/src/assets/images/team/rogin.png',
  shubho: '/src/assets/images/team/shubho.png',
  ghanshyam: '/src/assets/images/team/ghanshyam.png',
  mithun: '/src/assets/images/team/mithun.png',
  reema: '/src/assets/images/team/reema.png',
  priyanka: '/src/assets/images/team/priyanka.png',
  sachin: '/src/assets/images/team/sachin.png',
};

// ============================================================================
// ERP TESTING PAGE ASSETS (1 image)
// ============================================================================

export const erpAssets = {
  heroImage: '/src/assets/images/erp/hero.png',
};

// ============================================================================
// SECURITY PAGE ASSETS (1 image)
// ============================================================================

export const securityAssets = {
  dashboard: '/src/assets/images/security/dashboard.png',
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all assets as a flat object
 */
export const allAssets = {
  ...homeAssets,
  ...aboutUsAssets,
  ...teamAssets,
  ...erpAssets,
  ...securityAssets,
};

/**
 * Get asset by key with fallback to silent placeholder
 * App must never crash due to missing assets
 */
export function getAsset(key: string, fallback: string = ''): string {
  const asset = (allAssets as any)[key];
  
  if (asset) return asset;
  if (fallback) return fallback;
  
  // Silent placeholder (1x1 transparent pixel)
  return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
}

/**
 * Check if asset exists in manifest
 */
export function hasAsset(key: string): boolean {
  return key in allAssets;
}

/**
 * Get asset with error handling
 */
export function safeGetAsset(key: string): string {
  try {
    return getAsset(key);
  } catch {
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }
}

// ============================================================================
// ASSET COUNTS
// ============================================================================

export const ASSET_COUNTS = {
  home: 20,
  aboutUs: 33,
  team: 8,
  erp: 1,
  security: 1,
  total: 63,
};
