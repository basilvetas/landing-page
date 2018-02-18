# Landing Page

## FOR CLIENT:

INSTALL DEPENDENCIES:
`yarn`

INSTALL FIREBASE:
`firebase init`

CLEAN BUILD
`gulp clean`

BUILD PROJECT
`gulp`

START DEV SERVER
`gulp dev`

DEPLOY TO FIREBASE:
`firebase deploy`


## FOR FUNCTIONS:

INSTALL DEPENDENCIES:
`yarn`

SET CONFIG EMAIL:
`firebase functions:config:set gmail.password="YOUR-PASSWORD" gmail.email="YOUR-EMAIL"`

CHECK CONFIG EMAIL:
`firebase functions:config:get`

DEPLOY TO FIREBASE:
`firebase deploy --only functions`


