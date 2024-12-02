import Image from "next/image";
import React from 'react'; 
import { url } from "inspector";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <header className="flex w-full items-center flex-wrap align-middle justify-center font-bold bg-center bg-cover min-h-[75vh] bg-fixed">
          <Image 
          width={1920}
          height={1080}
          src={"https://preview.redd.it/mdtsc6cx5d4c1.png?width=3440&format=png&auto=webp&s=5dcde5df9cf783ca87b756f03e047918039b5293"}
          alt="Cyberpunk 2077 background"
          className="w-full h-full opacity-55 -z-10 fixed"
          />
          <h1 className=" text-7xl text-white font-bold text-center opacity-100 absolute p-5 ">Works Cited</h1>
      </header>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-Theme-Colors-Charcoal">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <ul>
          <li className="text-7xl mb-5 mt-10">Main Page</li>
            <li>            
              <ol>
                <li><strong>Cyberpunk 2077 image.</strong> <em>Cyberpunk 2077</em>, CDProjektRed, 2018. <Link href="https://preview.redd.it/mdtsc6cx5d4c1.png?width=3440&format=png&auto=webp&s=5dcde5df9cf783ca87b756f03e047918039b5293" target="_blank">Link</Link></li>
                <li><strong>Detroit: Become Human cover art.</strong> <em>Detroit: Become Human</em>, Quantic Dream, 2018. <Link href="https://cdn1.epicgames.com/columbine/offer/DETROIT2-860x1148-a03ac8673f779b286dcccc83dbe75249.jpg" target="_blank">Link</Link></li>
                <li><strong>BioShock: The Collection box art.</strong> <em>BioShock: The Collection</em>, 2K Games, 2016. <Link href="https://static.wikia.nocookie.net/bioshock/images/0/09/BIOSHOCK_THE_COLLECTION_BOX_ART.jpg/revision/latest?cb=20160701002243" target="_blank">Link</Link></li>
                <li><strong>Celeste box art.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. <Link href="https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png" target="_blank">Link</Link></li>
              </ol>
            </li>
            <li className="text-7xl mb-5 mt-10">Detroit: Become Human Page</li>
            <li>            
              <ol>
              <li><strong>Androids confronting humans.</strong> <em>Detroit: Become Human</em>, Quantic Dream, PlayStation 4, 2018. Screenshot taken by User. Link: <Link href="https://images6.alphacoders.com/920/thumb-1920-920991.jpg" target="_blank">https://images6.alphacoders.com/920/thumb-1920-920991.jpg</Link></li>
              <li><em>Detroit: Become Human</em> Awards. IMDb. Link: <Link href="https://www.imdb.com/title/tt5158314/awards/" target="_blank">https://www.imdb.com/title/tt5158314/awards/</Link></li>
              <li><strong>Kara and Alice escaping scene.</strong> <em>Detroit: Become Human</em>, Quantic Dream, PlayStation 4, 2018. Screenshot taken by User. Link: <Link href="https://steamuserimages-a.akamaihd.net/ugc/921430377870915819/DAB6165E156CE60182BDE85E44AE716518431210/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" target="_blank">https://steamuserimages-a.akamaihd.net/ugc/921430377870915819/DAB6165E156CE60182BDE85E44AE716518431210/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false</Link></li>
              <li><strong>Choice selection screen.</strong> <em>Detroit: Become Human</em>, Quantic Dream, PlayStation 4, 2018. Screenshot taken by User. Link: <Link href="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Detroit-Become-Human-Choices.jpg" target="_blank">https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Detroit-Become-Human-Choices.jpg</Link></li>
              <li><strong>Connor in interrogation room.</strong> <em>Detroit: Become Human</em>, Quantic Dream, PlayStation 4, 2018. Screenshot taken by User. Link: <Link href="https://miro.medium.com/v2/0*PUXeTeWWL3fmaykv.jpeg" target="_blank">https://miro.medium.com/v2/0*PUXeTeWWL3fmaykv.jpeg</Link></li>
              <li><em>Detroit: Become Human.</em> Quantic Dream. Link: <Link href="https://www.quanticdream.com/en/detroit-become-human" target="_blank">https://www.quanticdream.com/en/detroit-become-human</Link></li>
              </ol>
            </li>
            <li className="text-7xl mb-5 mt-10">Bioshock Page</li>
            <li>            
              <ol>
               <li><strong>BioShock: The Collection cover art.</strong> <em>BioShock: The Collection</em>, 2K Games, 2016. Link: <Link href="https://cdn2.unrealengine.com/egs-bioshockthecollection-massmediagames-g1c-00-1920x1080-4269d4245e1e.jpg?resize=1&w=1920&h=1080&quality=medium" target="_blank">https://cdn2.unrealengine.com/egs-bioshockthecollection-massmediagames-g1c-00-1920x1080-4269d4245e1e.jpg?resize=1&w=1920&h=1080&quality=medium</Link></li>
               <li><em>BioShock: The Collection</em> Awards. IMDb. Link: <Link href="https://www.imdb.com/title/tt1094581/awards/" target="_blank">https://www.imdb.com/title/tt1094581/awards/</Link></li>
               <li><strong>BioShock character image.</strong> <em>BioShock</em>, 2K Games, 2007. Screenshot taken by User. Link: <Link href="https://i.redd.it/46cnws216sub1.png" target="_blank">https://i.redd.it/46cnws216sub1.png</Link></li>
               <li><strong>BioShock Infinite cover art.</strong> <em>BioShock Infinite</em>, Irrational Games, 2013. Link: <Link href="https://bloximages.newyork1.vip.townnews.com/dailytoreador.com/content/tncms/assets/v3/editorial/3/99/399d91e8-f986-11e6-b3da-933732682285/58af6eff256e5.image.png?resize=1396%2C785" target="_blank">https://bloximages.newyork1.vip.townnews.com/dailytoreador.com/content/tncms/assets/v3/editorial/3/99/399d91e8-f986-11e6-b3da-933732682285/58af6eff256e5.image.png?resize=1396%2C785</Link></li>
               <li><strong>BioShock Infinite screenshot.</strong> <em>BioShock Infinite</em>, Irrational Games, 2013. Screenshot taken by User. Link: <Link href="https://preview.redd.it/65qjatgwt1771.jpg?width=640&crop=smart&auto=webp&s=da35ad540703aeff673e712595390b073a90c054" target="_blank">https://preview.redd.it/65qjatgwt1771.jpg?width=640&crop=smart&auto=webp&s=da35ad540703aeff673e712595390b073a90c054</Link></li>
               <li><strong>Jealousy reaction GIF.</strong> <em>BioShock Infinite</em>, Irrational Games, 2013. Link: <Link href="https://media.tenor.com/X27J7JSgawUAAAAM/jealous.gif" target="_blank">https://media.tenor.com/X27J7JSgawUAAAAM/jealous.gif</Link></li>
              </ol>
            </li>
            <li className="text-7xl mb-5 mt-10">Celeste Page</li>
            <li>            
              <ol>
                <li><strong>Cover art.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://images7.alphacoders.com/901/901149.png" target="_blank">https://images7.alphacoders.com/901/901149.png</Link></li>
                <li><em>Celeste</em> Awards. IMDb. Link: <Link href="https://www.imdb.com/title/tt7903902/awards/" target="_blank">https://www.imdb.com/title/tt7903902/awards/</Link></li>
                <li><strong>Celeste mountain image.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://www.superjumpmagazine.com/content/images/2023/11/celestemountain.jpg" target="_blank">https://www.superjumpmagazine.com/content/images/2023/11/celestemountain.jpg</Link></li>
                <li><strong>Celeste screenshot 1.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://www.celestegame.com/images/screenshots/00.png" target="_blank">https://www.celestegame.com/images/screenshots/00.png</Link></li>
                <li><strong>Celeste screenshot 2.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://www.celestegame.com/images/screenshots/02.png" target="_blank">https://www.celestegame.com/images/screenshots/02.png</Link></li>
                <li><strong>Celeste screenshot 3.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://www.celestegame.com/images/screenshots/03.png" target="_blank">https://www.celestegame.com/images/screenshots/03.png</Link></li>
                <li><strong>Celeste screenshot 4.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://www.celestegame.com/images/screenshots/05.png" target="_blank">https://www.celestegame.com/images/screenshots/05.png</Link></li>
                <li><strong>Celeste screenshot 5.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://www.celestegame.com/images/screenshots/07.png" target="_blank">https://www.celestegame.com/images/screenshots/07.png</Link></li>
                <li><strong>Celeste screenshot 6.</strong> <em>Celeste</em>, Maddy Makes Games, 2018. Link: <Link href="https://www.celestegame.com/images/screenshots/08.png" target="_blank">https://www.celestegame.com/images/screenshots/08.png</Link></li>
              </ol>
            </li>
          </ul>
        </div>
        </main>
      </div>
    </div>
  );
}
