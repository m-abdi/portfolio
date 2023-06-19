export interface PostType {
  id: number;
  attributes: {
    slug: string;
    title: string;
    subtitle?: string;
    content: string;
    cover?: {
      data: {
        id: number;
        attributes: {
          url: string;
          alternativeText: string
        };
      };
    };
  };
}
