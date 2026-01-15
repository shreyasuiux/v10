/**
 * HOME PAGE IMAGE ASSETS
 * 
 * PRODUCTION-READY PLACEHOLDER SYSTEM
 * 
 * This file provides data URI placeholders for all home page images.
 * These are lightweight inline SVGs that prevent build failures during development.
 * 
 * BEFORE PRODUCTION DEPLOYMENT:
 * 1. Export actual images from Figma
 * 2. Place them in /src/assets/images/home/ folder
 * 3. Update these exports to import actual PNG/WebP files
 * 
 * Example replacement:
 *   import bgImg from './home/background.png';
 *   export const background = bgImg;
 */

// Placeholder generator
const p = (text: string, w = 800, h = 600, color = '1a1a2e') =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'%3E%3Crect width='${w}' height='${h}' fill='%23${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='20' fill='white' opacity='0.5'%3E${text}%3C/text%3E%3C/svg%3E`;

// Background images
export const background = p('Background', 1920, 1080, '0f0f1e');
export const background1 = p('Background Alt', 1920, 1080, '1a1a2e');

// Use case images (7 images)
export const useCase1 = p('Use Case 1', 400, 300, '2d2d44');
export const useCase2 = p('Use Case 2', 400, 300, '2d2d44');
export const useCase3 = p('Use Case 3', 400, 300, '2d2d44');
export const useCase4 = p('Use Case 4', 400, 300, '2d2d44');
export const useCase5 = p('Use Case 5', 400, 300, '2d2d44');
export const useCase6 = p('Use Case 6', 400, 300, '2d2d44');
export const useCase7 = p('Use Case 7', 400, 300, '2d2d44');

// Video thumbnails (6 images)
export const videoThumb1 = p('Video 1', 640, 360, '3d3d5c');
export const videoThumb2 = p('Video 2', 640, 360, '3d3d5c');
export const videoThumb3 = p('Video 3', 640, 360, '3d3d5c');
export const videoThumb4 = p('Video 4', 640, 360, '3d3d5c');
export const videoThumb5 = p('Video 5', 640, 360, '3d3d5c');
export const videoThumb6 = p('Video 6', 640, 360, '3d3d5c');

// Case study images
export const caseStudyReligare = p('Religare', 600, 400, '4d2d5c');
export const abhijitShah = p('Abhijit Shah', 400, 400, '5d3d6c');

// Textures
export const texture = p('Texture', 100, 100, '2a2a3e');
export const noiseTexture = p('Noise', 100, 100, '1f1f2e');

// Career
export const careerOpportunities = p('Careers', 800, 600, '6d4d7c');

// Default export for convenience
export default {
  background,
  background1,
  useCase1,
  useCase2,
  useCase3,
  useCase4,
  useCase5,
  useCase6,
  useCase7,
  videoThumb1,
  videoThumb2,
  videoThumb3,
  videoThumb4,
  videoThumb5,
  videoThumb6,
  caseStudyReligare,
  abhijitShah,
  texture,
  noiseTexture,
  careerOpportunities,
};
