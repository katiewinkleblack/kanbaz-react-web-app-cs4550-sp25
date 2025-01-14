export default function Lab1() {
    return (
    <>
    <div>
            <h2>Lab 1</h2>
            <h3>Headings</h3>
            <p>Headings Allow Details</p>
        </div>
        <div id="wd-forms">
                <h4>Form Elements</h4>
                <label htmlFor="wd-username">Username:</label>
                <input
                id ="wd-username"
                type="text"
                placeholder="jdoe"
                title="Please type your password"
                />
                <br/>
                <label htmlFor="wd-password">Password:</label>
                <input
                id="wd-password"
                type="password"
                placeholder=""
                title="Please type your password"
                />
            </div>
            <div>
                <h5>Radio Buttons</h5>
                Choose yout Favorite Movie:
                <br/>
                <input id="wd-comedy" type="radio" name="wd-genre"/>
                <label htmlFor="wd-comedy">Comedy</label>
                <br/>
                <input id="wd-horror" type="radio" name="wd-genre"/>
                <label htmlFor="wd-horror">Horror</label>
                <br/>
                <input id="wd-drama" type="radio" name="wd-genre"/>
                <label htmlFor="wd-drama">Drama</label>
            </div>
            </>
    );
}