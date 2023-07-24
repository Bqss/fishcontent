<h1> Fishcontent SSR </h1>

<h2> Requirement : </h2>
<li> Redis
<li> NodeJs v14 or higher
<li> Mailjet account 

<h2> Installation : </h2>
<li> Clone this project
<li> type <code>npm install</code>
<li> pay attention to <code>.env</code> file, match with ur environment (see <code>.env.example</code>)
<li> make empty <code>tmp</code> folder (used for sqlite)
<li> type <code>node ace migration:run</code>
<li> optional : run seeder with <code>node ace db:seed</code>
<li> start with <code>npm run dev</code>

<h2> For Production Level : </h2>
<li> Please follow this link https://docs.adonisjs.com/guides/deployment

<h2>For preview <h2>
<li>visit https://fishcontent.my.id/
<li>demo account -> email: demo@gmail.com   | password: demo
