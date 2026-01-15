/**
 * HOME PAGE - Production-Ready with Local Assets
 * 
 * Architecture:
 * - Wraps Desktop72 component in PageWithNavigation
 * - Home page assets imported from @/assets/assetManifest
 * - Assets passed as props to Desktop72Wrapper
 * - ZERO external asset dependencies (100% production-safe)
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { Desktop72Wrapper } from '@/design/Desktop72.wrapper';
import { homeAssets } from '@/assets/assetManifest';

export function HomePage() {
  return (
    <PageWithNavigation>
      {(props) => (
        <Desktop72Wrapper 
          assets={homeAssets}
          onSearchClick={props.onSearchClick} 
        />
      )}
    </PageWithNavigation>
  );
}