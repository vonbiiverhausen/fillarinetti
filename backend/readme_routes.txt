K‰ytt‰j‰t

GET /api/kayttaja
- hakee kannasta kaikki k‰ytt‰j‰t listana.
GET /kayttaja/:k‰ytt‰j‰tunnus
- hakee kannasta yksitt‰isen k‰ytt‰j‰n tiedot

POST /api/kayttaja
- lis‰‰ k‰ytt‰j‰n tietokantaan. Edellytt‰‰ query -kent‰t: username, password, sposti, puhnro

PUT /api/kayttaja/:k‰ytt‰j‰tunnus
- p‰ivitt‰‰ k‰ytt‰j‰n s‰hkˆposti- ja puhelinnumerotiedot. Vaaditut query -kent‰t: sposti ja puhnro

PUT /api/kayttaja/:k‰ytt‰j‰tunnus/salasana
- p‰ivitt‰‰ k‰ytt‰j‰n salasanan. Vaatii query -kent‰n password

DELETE /api/:k‰ytt‰j‰tunnus
- poistaa k‰ytt‰j‰tunnuksen kannasta

Ilmoitukset

POST /api/ilmoitukset
- lis‰‰ ilmoituksen tietokantaan
- Tarvittavat query -kent‰t:
ilmJattaja,
ilmJatetty,
ilmTila,
hinta,
tyyppi,
alatyyppi,
merkki,
rengas_koko,
runko_koko,
paikkakunta,
kuva,
kuvaus

GET /api/ilmoitukset
- hakee kaikki ilmoitukset

GET /api/ilmoitukset/:id
- hakee ilmoituksen id:ll‰

DELETE /api/ilmoitukset/:id
- poistaa id:ll‰ olevan ilmoituksen

GET /api/ilmoitukset/haku ** kesken **
- hakee hakuparametrien mukaiset ilmoitukset