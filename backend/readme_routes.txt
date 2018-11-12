GET /kayttaja
- hakee kannasta kaikki k‰ytt‰j‰t listana.
GET /kayttaja/:k‰ytt‰j‰tunnus
- hakee kannasta yksitt‰isen k‰ytt‰j‰n tiedot

POST /kayttaja
- lis‰‰ k‰ytt‰j‰n tietokantaan. Edellytt‰‰ query -kent‰t: username, password, sposti, puhnro

PUT /kayttaja/:k‰ytt‰j‰tunnus
- p‰ivitt‰‰ k‰ytt‰j‰n s‰hkˆposti- ja puhelinnumerotiedot. Vaaditut query -kent‰t: sposti ja puhnro

PUT /kayttaja/:k‰ytt‰j‰tunnus/salasana
- p‰ivitt‰‰ k‰ytt‰j‰n salasanan. Vaatii query -kent‰n password

DELETE /:k‰ytt‰j‰tunnus
- poistaa k‰ytt‰j‰tunnuksen kannasta