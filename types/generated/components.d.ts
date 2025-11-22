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

export interface ElementsColorVariante extends Struct.ComponentSchema {
  collectionName: 'components_elements_color_variantes';
  info: {
    displayName: 'Color variante';
    icon: 'paint';
  };
  attributes: {
    color_hex: Schema.Attribute.String;
    color_name: Schema.Attribute.String;
    product_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementsFeatureSlide extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_slides';
  info: {
    displayName: 'Feature Slide';
    icon: 'crown';
  };
  attributes: {
    card_info: Schema.Attribute.Component<'elements.card', false>;
    feature_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LayoutBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_banner_sections';
  info: {
    displayName: 'Banner Section';
    icon: 'sun';
  };
  attributes: {
    banner_badge: Schema.Attribute.String;
    banner_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    banner_subtitle: Schema.Attribute.Text;
    banner_title: Schema.Attribute.String;
    link: Schema.Attribute.Component<'component.link', false>;
  };
}

export interface LayoutCarouselSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_carousel_sections';
  info: {
    displayName: 'Carousel Section';
    icon: 'picture';
  };
  attributes: {
    slides: Schema.Attribute.Component<'elements.feature-slide', true>;
  };
}

export interface LayoutDownloadAppSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_download_app_sections';
  info: {
    displayName: 'Download App Section';
    icon: 'phone';
  };
  attributes: {
    app_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    download_link: Schema.Attribute.Component<'component.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFeaturedProducts extends Struct.ComponentSchema {
  collectionName: 'components_layout_featured_products';
  info: {
    displayName: 'Featured Products';
    icon: 'command';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    section_title: Schema.Attribute.String;
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
      'elements.color-variante': ElementsColorVariante;
      'elements.feature-slide': ElementsFeatureSlide;
      'layout.banner-section': LayoutBannerSection;
      'layout.carousel-section': LayoutCarouselSection;
      'layout.download-app-section': LayoutDownloadAppSection;
      'layout.featured-products': LayoutFeaturedProducts;
      'layout.hero-section': LayoutHeroSection;
      'layout.highlights-section': LayoutHighlightsSection;
    }
  }
}
