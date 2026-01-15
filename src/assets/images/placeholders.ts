/**
 * PLACEHOLDER IMAGE GENERATOR
 * 
 * Provides data URI placeholders for images during development.
 * These are lightweight, inline SVGs that prevent build failures
 * when actual image files haven't been exported yet.
 * 
 * PRODUCTION NOTE:
 * Replace these placeholders with actual exported images from Figma
 * before deploying to production.
 */

/**
 * Create a placeholder image as a data URI
 * @param text - Text to display in the placeholder
 * @param width - Width of the placeholder
 * @param height - Height of the placeholder
 * @param color - Background color (hex without #)
 */
export function createPlaceholder(
  text: string, 
  width: number = 800, 
  height: number = 600,
  color: string = '1a1a2e'
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="#${color}"/>
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="system-ui, sans-serif" 
        font-size="20" 
        fill="#ffffff"
        opacity="0.7"
      >${text}</text>
    </svg>
  `.trim();
  
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// ============================================================================
// HOME PAGE PLACEHOLDERS
// ============================================================================

export const homePlaceholders = {
  background: createPlaceholder('Background', 1920, 1080, '0f0f1e'),
  background1: createPlaceholder('Background Alt', 1920, 1080, '1a1a2e'),
  
  // Use case images
  useCase1: createPlaceholder('Use Case 1', 400, 300, '2d2d44'),
  useCase2: createPlaceholder('Use Case 2', 400, 300, '2d2d44'),
  useCase3: createPlaceholder('Use Case 3', 400, 300, '2d2d44'),
  useCase4: createPlaceholder('Use Case 4', 400, 300, '2d2d44'),
  useCase5: createPlaceholder('Use Case 5', 400, 300, '2d2d44'),
  useCase6: createPlaceholder('Use Case 6', 400, 300, '2d2d44'),
  useCase7: createPlaceholder('Use Case 7', 400, 300, '2d2d44'),
  
  // Video thumbnails
  videoThumb1: createPlaceholder('Video 1', 640, 360, '3d3d5c'),
  videoThumb2: createPlaceholder('Video 2', 640, 360, '3d3d5c'),
  videoThumb3: createPlaceholder('Video 3', 640, 360, '3d3d5c'),
  videoThumb4: createPlaceholder('Video 4', 640, 360, '3d3d5c'),
  videoThumb5: createPlaceholder('Video 5', 640, 360, '3d3d5c'),
  videoThumb6: createPlaceholder('Video 6', 640, 360, '3d3d5c'),
  
  // Case studies
  caseStudyReligare: createPlaceholder('Religare Case Study', 600, 400, '4d2d5c'),
  abhijitShah: createPlaceholder('Abhijit Shah', 400, 400, '5d3d6c'),
  
  // Textures
  texture: createPlaceholder('Texture', 100, 100, '2a2a3e'),
  noiseTexture: createPlaceholder('Noise', 100, 100, '1f1f2e'),
  
  // Career
  careerOpportunities: createPlaceholder('Career Opportunities', 800, 600, '6d4d7c'),
};

// ============================================================================
// EXPORT PLACEHOLDERS AS PNG PATHS
// ============================================================================

/**
 * These exports match the assetManifest structure
 * During development, they return data URIs
 * In production, replace with actual file paths
 */
export default {
  // Home assets
  '/src/assets/images/home/background.png': homePlaceholders.background,
  '/src/assets/images/home/background1.png': homePlaceholders.background1,
  '/src/assets/images/home/use-case-1.png': homePlaceholders.useCase1,
  '/src/assets/images/home/use-case-2.png': homePlaceholders.useCase2,
  '/src/assets/images/home/use-case-3.png': homePlaceholders.useCase3,
  '/src/assets/images/home/use-case-4.png': homePlaceholders.useCase4,
  '/src/assets/images/home/use-case-5.png': homePlaceholders.useCase5,
  '/src/assets/images/home/use-case-6.png': homePlaceholders.useCase6,
  '/src/assets/images/home/use-case-7.png': homePlaceholders.useCase7,
  '/src/assets/images/home/video-thumb-1.png': homePlaceholders.videoThumb1,
  '/src/assets/images/home/video-thumb-2.png': homePlaceholders.videoThumb2,
  '/src/assets/images/home/video-thumb-3.png': homePlaceholders.videoThumb3,
  '/src/assets/images/home/video-thumb-4.png': homePlaceholders.videoThumb4,
  '/src/assets/images/home/video-thumb-5.png': homePlaceholders.videoThumb5,
  '/src/assets/images/home/video-thumb-6.png': homePlaceholders.videoThumb6,
  '/src/assets/images/home/case-study-religare.png': homePlaceholders.caseStudyReligare,
  '/src/assets/images/home/abhijit-shah.png': homePlaceholders.abhijitShah,
  '/src/assets/images/home/texture.png': homePlaceholders.texture,
  '/src/assets/images/home/noise-texture.png': homePlaceholders.noiseTexture,
  '/src/assets/images/home/career-opportunities.png': homePlaceholders.careerOpportunities,
};
