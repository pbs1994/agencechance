import type { RouteKey } from '../../i18n';
import type { PageData } from '../../lib/blocks';
import { home } from './home';
import { about, contacts } from './about';
import { services, planning, coordination, host, vendors, proposal, forTwo, weekend, anniversary } from './offers';
import { venuesHub, venuePages } from './venues';
import { portfolio, couplePages } from './portfolio';

/** Block-based pages. Blog and legal pages have their own templates. */
export const PAGES: Partial<Record<RouteKey, PageData>> = {
  home: home as unknown as PageData,
  about,
  contacts,
  services,
  planning,
  coordination,
  host,
  vendors,
  proposal,
  forTwo,
  weekend,
  anniversary,
  venues: venuesHub,
  ...venuePages,
  portfolio,
  ...couplePages,
};
