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

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    hero_imagen: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    hero_subtitulo: Schema.Attribute.Text;
    hero_titulo: Schema.Attribute.String;
    link: Schema.Attribute.Component<'component.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.link': ComponentLink;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
