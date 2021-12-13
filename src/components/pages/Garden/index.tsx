import React from 'react';
import Hashtag from '../../tags/Hashtag';
import { GardenLayout } from '../../layouts';

const hashtags = [
  'Web3',
  'NFT',
  'PlayToEarn',
  'Mining',
  'Blockchain',
  'Solana',
];

const Garden: React.FC<{}> = () => {
  return (
    <GardenLayout
      leftContent={hashtags.map((item, key) => (
        <div className='mx-2 my-2' key={key}>
          <Hashtag
            title={item}
            className='h-6 py-1 px-2.5 rounded-2xl bg-neutral-5 border-neutral-5 hover:border-accent hover:text-accent focus:border-accent-pressed focus:outline-btnFocus focus:text-accent-pressed'
          />
        </div>
      ))}
      right75Content={
        <div className='text-white'>
          Minim mollit ut est cupidatat laboris id eiusmod Lorem. Aliquip est
          quis mollit dolor ut tempor exercitation proident elit. Ad duis tempor
          ad cupidatat nostrud. Sint occaecat culpa reprehenderit eu irure Velit
          ullamco cupidatat proident sunt ad eu ullamco non ut eiusmod. Id sunt
          reprehenderit adipisicing qui. Ad non quis ea aute officia eiusmod
          deserunt in non consectetur. Culpa adipisicing qui deserunt laborum
          sint commodo dolor mollit eu incididunt veniam. Cupidatat minim mollit
          commodo deserunt sit ad exercitation sunt minim commodo. Non culpa
          magna incididunt amet dolore irure consectetur mollit nisi elit
          occaecat duis. Lorem excepteur mollit do et enim sint aliquip nulla
          culpa pariatur veniam consequat duis. Aute quis ad ipsum pariatur
          consequat. Tempor veniam non consequat dolor deserunt qui velit. Irure
          adipisicing amet do officia aliqua non consequat sint aute. Lorem nisi
          nulla eiusmod elit nulla minim quis Lorem ad fugiat qui magna nisi.
          Sint ut commodo dolor do ea ipsum tempor elit. Dolore elit aliquip
          ipsum id reprehenderit adipisicing et ipsum ipsum. Cupidatat cillum
          non sint aliquip enim. Nulla nostrud consequat nostrud nostrud aliqua
          sint et sint Lorem magna. Tempor nostrud dolor nisi ut minim pariatur
          deserunt nostrud enim. Ad mollit officia nulla dolore deserunt ad
          exercitation pariatur ea aliqua nostrud aute anim. Amet et et ut
          fugiat est deserunt. Qui nulla cupidatat sint qui proident ea ut
          pariatur. Non duis quis culpa eiusmod sint culpa excepteur eiusmod ea
          duis proident dolor dolor. Ea ea deserunt et minim. Adipisicing velit
          non magna aute non cillum id mollit. Laborum nulla nostrud labore qui.
          Duis ea irure pariatur adipisicing ea consectetur mollit nostrud
          eiusmod minim pariatur aute ipsum dolor. Fugiat elit ad esse aliquip
          enim adipisicing id anim. Aliquip exercitation excepteur nisi irure.
          Quis excepteur veniam est nisi consequat occaecat non quis sunt cillum
          duis labore. Adipisicing dolor proident reprehenderit occaecat.
          Eiusmod elit ut amet ea quis nulla magna eiusmod exercitation ex.
          Tempor Lorem anim ipsum mollit consectetur. Eu ipsum in dolore irure
          enim cupidatat fugiat occaecat. Incididunt commodo in culpa ad ut
          eiusmod cillum dolore enim velit. Laboris dolor tempor pariatur
          incididunt pariatur mollit excepteur labore. Minim est fugiat laboris
          dolor veniam aliqua. Laboris pariatur qui amet cupidatat culpa
          exercitation ad id commodo amet Lorem. Sit laborum exercitation
          exercitation magna pariatur laboris qui in. Exercitation culpa sunt
          nulla labore. Deserunt laborum duis est velit commodo mollit elit
          proident aute anim exercitation. Ipsum aute commodo culpa
          reprehenderit non eu non proident. Exercitation incididunt deserunt
          anim cillum nulla commodo sit magna velit sint incididunt proident
          excepteur. Ipsum aliquip consectetur voluptate nulla aliqua cillum
          exercitation adipisicing voluptate occaecat consequat velit cupidatat.
          Elit consectetur veniam occaecat duis. Ullamco incididunt sint
          cupidatat ad occaecat elit ea laborum commodo ipsum. Qui labore dolore
          labore dolor ipsum exercitation esse enim excepteur tempor. Est non
          tempor ad anim in nostrud. Aliquip in amet tempor fugiat minim dolor
          do mollit velit cillum quis id ut pariatur. Cupidatat ullamco veniam
          eu ea nulla in qui dolore veniam laborum nostrud sunt in. Dolore aute
          excepteur proident quis sit elit enim labore eu aute. Dolor eiusmod
          incididunt dolor aute labore. Anim magna eiusmod eiusmod nostrud nulla
          fugiat anim tempor. Ut aute mollit incididunt minim ea veniam commodo
          ullamco non. Incididunt irure esse enim elit sint aliquip officia
          dolore occaecat fugiat nisi. Minim eu nulla laborum sunt ullamco
          voluptate ea pariatur aute sint mollit eiusmod ut. Labore amet
          deserunt velit laborum. Laborum qui amet laborum tempor eu in mollit
          officia incididunt laboris non ut excepteur. Cillum cupidatat occaecat
          anim esse sunt commodo laboris. Magna irure commodo aute aliquip amet
          id Lorem dolore labore Lorem anim. Quis officia fugiat ad mollit
          consequat velit exercitation dolor. Non anim cupidatat enim cupidatat
          est sunt incididunt proident consectetur sunt cillum labore esse. Ex
          et cupidatat minim ipsum ullamco consectetur esse dolore. Lorem
          consequat exercitation dolor duis labore amet dolor aute adipisicing
          id occaecat incididunt. Dolore exercitation sunt nisi anim.
          Adipisicing adipisicing dolor aliqua exercitation veniam ipsum laboris
          deserunt est eiusmod exercitation aliqua aliquip. Magna veniam est
          labore reprehenderit. Magna esse incididunt anim aute officia
          adipisicing sit elit aliquip anim exercitation ipsum anim. Consequat
          ex eiusmod aliqua minim qui ut esse ipsum ullamco cillum nisi.
          Voluptate laboris magna mollit mollit. Magna fugiat tempor ullamco
          mollit. Laborum reprehenderit sit deserunt et ullamco est amet labore
          voluptate. Veniam ad dolore magna culpa. Aliquip sint elit amet do ut
          laboris reprehenderit. Aliqua est adipisicing incididunt non eu elit
          labore aliqua. Dolor ex nisi labore ad duis consectetur ea occaecat
          quis dolor. Incididunt elit consequat non nisi nostrud cupidatat do
          elit adipisicing labore non deserunt. Eu duis anim elit nostrud nulla
          incididunt veniam ut ex Lorem id aliqua fugiat amet. Adipisicing
          pariatur aliqua incididunt sint labore tempor cupidatat cupidatat elit
          excepteur deserunt. Sint nulla ut nisi laboris eiusmod minim ipsum
          reprehenderit officia. Tempor in enim enim ullamco mollit sunt sunt
          laboris. Culpa laboris Lorem aute id voluptate cupidatat velit nostrud
          consequat in velit Lorem. Nisi aliqua reprehenderit laborum veniam et
          ea aliquip et enim id dolor mollit. Exercitation duis ullamco fugiat
          exercitation aliquip non. Irure esse enim esse veniam nostrud
          consequat tempor dolor. Culpa magna anim veniam veniam qui laborum
          exercitation minim incididunt. Officia id ipsum elit aliqua ad minim
          ad et et nostrud eiusmod dolor. Minim laboris nostrud eiusmod duis do
          qui incididunt. Lorem amet velit esse sunt adipisicing elit non est
          quis. Est minim commodo eiusmod consequat mollit do consectetur dolore
          nulla do id tempor. Eiusmod exercitation exercitation ipsum duis elit
          quis aliqua ex excepteur excepteur consequat commodo esse excepteur.
          Deserunt duis pariatur ad ipsum in aliqua aute ut cupidatat ut labore
          ut velit consequat. Qui exercitation laboris id occaecat elit laborum
          sit cupidatat ad nisi nulla nisi pariatur. Irure incididunt non
          consectetur mollit. Ipsum id dolor laboris cillum qui ad officia
          reprehenderit irure occaecat cupidatat ut in tempor. Voluptate nisi
          non officia exercitation commodo occaecat sit cillum consectetur et.
          Elit fugiat adipisicing veniam adipisicing culpa duis enim magna dolor
          nostrud fugiat ullamco veniam. Sunt nisi cupidatat aute exercitation
          cillum. Occaecat consectetur qui est et sit culpa laborum et anim non
          dolor ut exercitation consectetur. Dolore ad in pariatur adipisicing
          irure exercitation deserunt exercitation voluptate aliquip voluptate
          incididunt incididunt. Id cupidatat anim laborum esse qui esse est
          aliqua commodo cupidatat laborum sit eu. Cupidatat ut aliquip laborum
          minim excepteur deserunt enim Lorem dolore cupidatat aliquip ea
          adipisicing officia. Anim nostrud aliquip nostrud fugiat enim. Qui
          duis anim laborum aliqua. Amet eu in officia reprehenderit
          exercitation. Eiusmod velit irure ipsum et labore incididunt aute
          ipsum in. Culpa anim occaecat quis consequat incididunt. Culpa nulla
          labore eu dolore ex Lorem sit dolore ad Lorem. Duis exercitation
          aliqua aliquip mollit eu. Occaecat dolor elit quis ut aliquip commodo
          aute ea pariatur magna excepteur quis. Duis et culpa nulla ad sunt
          esse. Sint incididunt ipsum veniam et pariatur do nulla. Ullamco elit
          officia laboris dolor voluptate do sunt id ex culpa laborum.
        </div>
      }
      right25Content={<div className='text-white'>Link to this page</div>}
      mobileContent={<div className='p-6 bg-indigo-400'>Mobile Garden</div>}
    />
  );
};

export default Garden;
