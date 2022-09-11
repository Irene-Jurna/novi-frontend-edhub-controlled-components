import React from 'react';
import './App.css';

//Tip: in de uitwerkingen starten ze de namen met 'form'. Bijv: formName, formAge, formNewsletter, formComments.

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [reviewValue, setReviewValue] = React.useState('');
    const [newsletterValue, toggleNewsletterValue] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log({nameValue, ageValue, reviewValue, newsletterValue});
    }

    return (
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        Gegevens
                    </legend>

                    <label htmlFor="name">
                        Naam:
                        <input
                            type="text"
                            name="name"
                            id="form-name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </label>

                    <label htmlFor="age">
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            id="form-age"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>
                        Jouw review
                    </legend>

                    <label htmlFor="review">
                        Opmerkingen:
                        <textarea
                            name="review"
                            id="form-review"
                            rows="4"
                            cols="40"
                            placeholder="Wat vond je van het recept?"
                            value={reviewValue}
                            onChange={(e) => setReviewValue(e.target.value)}
                        >
                    </textarea>
                    </label>

                    <label htmlFor="newsletter">
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={newsletterValue}
                            onChange={() => toggleNewsletterValue(!newsletterValue)}
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>

                    <button
                        type="submit">
                        Versturen
                    </button>
                </fieldset>
            </form>
    );
}

export default App;
