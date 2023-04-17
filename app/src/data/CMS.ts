import 'server-only';

class CMS {
  readonly cmsHost: string;
  static cmsClient = undefined as any;

  constructor(cmsHost: string) {
    // singleton
    if (CMS.cmsClient) {
      throw new Error(
        'an instance of this object has been created before(singleton error)'
      );
    }
    CMS.cmsClient = this;
    this.cmsHost = cmsHost;
  }

  async getAllPosts() {
    return await fetch(
      process.env.NEXT_PUBLIC_CMS_HOST +
        '/api/posts?sort[0]=id:desc&populate=*',
      {
        headers: { Authorization: `bearer ${process.env.CMS_API_TOKEN}` },
      }
    ).then((resp) => resp.json());
  }

  async getOnePost(slug: string) {
    return await fetch(
      process.env.NEXT_PUBLIC_CMS_HOST +
        `/api/posts?filters[slug][$eq]=${slug}&populate=*`,
      { headers: { Authorization: `bearer ${process.env.CMS_API_TOKEN}` } }
    ).then((resp) => resp.json());
  }
}

export default new CMS(process.env.NEXT_PUBLIC_CMS_HOST);
