import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
    icon: 'code';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    hasGradient: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_banner_sections';
  info: {
    displayName: 'Banner Section';
    icon: 'sun';
  };
  attributes: {
    banner_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    banner_subtitle: Schema.Attribute.Text;
    banner_title: Schema.Attribute.String;
    link: Schema.Attribute.Component<'component.link', false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    hero_background: Schema.Attribute.Media<'images' | 'videos' | 'files'>;
    hero_imagen: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    hero_subtitulo: Schema.Attribute.Text;
    hero_titulo: Schema.Attribute.String;
    link: Schema.Attribute.Component<'component.link', false>;
  };
}

export interface LayoutHighlightsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_highlights_sections';
  info: {
    displayName: 'Highlights Section';
    icon: 'magic';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.link': ComponentLink;
      'elements.card': ElementsCard;
      'layout.banner-section': LayoutBannerSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.highlights-section': LayoutHighlightsSection;
    }
  }
}
