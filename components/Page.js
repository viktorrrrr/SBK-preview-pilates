import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Page = ({ blok }) => (
  <main className="px-6" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    <h2 className="text-2xl font-bold text-center"> {blok.textbox} </h2>
  </main>
);

export default Page;
