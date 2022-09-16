import React from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

//Tip: in de uitwerkingen starten ze de namen met 'form'. Bijv: formName, formAge, formNewsletter, formComments.

function App() {
    const {handleSubmit, formState: {errors}, register, watch} = useForm();

    const selectedReferrer = watch('found-through');

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log('ERRORS', errors);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
                <legend>
                    Gegevens
                </legend>

                <label htmlFor="name">Naam:
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "Naam is verplicht",
                            minLength: {
                                value: 3,
                                message: "Naam moet minimaal 3 karakters bevatten."
                            }
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>

                <label htmlFor="age">
                    Leeftijd:
                    <input
                        type="number"
                        id="form-age"
                        {...register("age", {
                            max: {
                                value: 80,
                                message: "U mag maximaal 80 jaar oud zijn",
                            }
                        })}
                    />
                </label>
                {errors.age && <p>{errors.age.message}</p>}
            </fieldset>

            <fieldset>
                <legend>
                    Jouw review
                </legend>

                <label htmlFor="review">
                    Opmerkingen:
                    <textarea
                        {...register("review", {
                            maxLength: {
                                value: 50,
                                message: "Er mogen maximaal 50 karakters gebruikt worden",
                            }
                        })}
                        id="form-review"
                        rows="4"
                        cols="40"
                        placeholder="Wat vond je van het recept?"
                    >
                    </textarea>
                </label>
                {errors.review && <p>{errors.review.message}</p>}

                <label htmlFor="newsletter">
                    <input
                        {...register("newsletter")}
                        type="checkbox"
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>

                <label htmlFor="referrer">
                    Hoe heb je dit recept gevonden?
                    <select id="referrer" {...register("found-through")}>
                        <option value="google">Google</option>
                        <option value="friend">Vriend</option>
                        <option value="advertisement">Advertentie</option>
                        <option value="other">Anders</option>
                    </select>
                </label>

                {selectedReferrer === "other" &&
                    <label htmlFor="referrer">
                        Anders namelijk:
                    <input
                        type="text"
                        {...register("found-through-anders")}
                    />
                    </label>
                }

                    <button
                    type="submit">
                    Versturen
                    </button>
                    </fieldset>
                    </form>
                    );
                }

                export default App;
