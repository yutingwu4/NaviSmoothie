/**
 * @name ViewSmoothies
 * @desc Highest component in hierarchy that displays both SmoothieDisplay and SmoothieCard.
 */

 import React, { useState } from 'react';
 import SmoothieCard from './SmoothieCard';
 
 function ViewSmoothies({
   smoothies,
   deleteCard,
   setIngredients,
   setInstructions,
   setNotes,
   saveCardEdit,
 }) {
   const renderCards = smoothies.map((smoothie, i) => (
     <SmoothieCard
       key={smoothie.id}
       name={smoothie.name}
       ingredients={smoothie.ingredients}
       instructions={smoothie.instructions}
       notes={smoothie.notes}
       id={i}
       deleteCard={deleteCard}
       saveCardEdit={saveCardEdit}
       smoothies={smoothies}
       setIngredients={setIngredients}
       setInstructions={setInstructions}
       setNotes={setNotes}
     />
   ));
 
   //does our input match a smoothie card
   const [search, setSearch] = useState('');
 
   //do we want to render all cards or just matching cards
   const [renderMatching, setRenderMatching] = useState([]);
 
   //traverse thru smoothie's array of objs to find potential matches
   const findSmoothieMatches = (input, smoothiesArray) => {
     const regex = new RegExp(input, 'gi'); //gi specifies to look globally and indifferently (not case-sensitive)
     return smoothiesArray.filter((drink) => drink.name.match(regex));
   };
 
   //display matching card
   const displaySmoothieMatches = (e) => {
     e.preventDefault();
     //compare input search to smoothie names
     if (findSmoothieMatches(search, smoothies).length) {
 
       const match = findSmoothieMatches(search, smoothies);
 
       //display matching card
       const renderMatchCard = match.map((card, i) => (
         <SmoothieCard
           key={card.id}
           name={card.name}
           ingredients={card.ingredients}
           instructions={card.instructions}
           notes={card.notes}
           id={i}
           deleteCard={deleteCard}
           saveCardEdit={saveCardEdit}
           smoothies={smoothies}
           setIngredients={setIngredients}
           setInstructions={setInstructions}
           setNotes={setNotes}
         />
       ));
       setRenderMatching(renderMatchCard);
     } else {
       alert(`Sorry, there are no matches for "${search}"!`);
       setRenderMatching(renderCards);
     }
   };
 
   return (
     <div className='view-smoothies'>
       <h1 className='slogan mt-5'>Welcome to the New You</h1>
       <form className='search-form' onSubmit={displaySmoothieMatches}>
         <input
           className='search-bar mt-5 ml-4'
           type='text'
           placeholder="Where's mah smoothie?"
           onChange={(e) => {
             setSearch(e.target.value);
           }}
         />
         <button type='submit' className='btn btn-primary ml-4 mb-1'>
           Search
         </button>
       </form>
       <div className='view-cards'>
         {renderMatching.length ? (
           <div className='view-cards'>{renderMatching}</div>
         ) : (
           <div className='view-cards'>{renderCards}</div>
         )}
       </div>
     </div>
   );
 }
 
 export default ViewSmoothies;
