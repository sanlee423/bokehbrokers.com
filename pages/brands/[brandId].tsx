import React from 'react';
import {makeStyles} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import {useRouter} from 'next/router';
import {Typography} from '@mui/material';

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  brandSection: {
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    height: '100%',
  },
  brandHeading: {
    fontWeight: 800,
    marginBottom: '4%',
  },
}));

const Brands: React.FC = () => {
  const classes = useStyles(cpTheme);
  const router = useRouter();
  const {brandId} = router.query;

  return (
    <div className={classes.homeContainer}>
      <div className={classes.brandSection}>
        <br />
        <Typography className={classes.brandHeading} variant="h4">
          Leica
        </Typography>
        <Typography>
          {`Leica Camera AG (/ˈlaɪkʌ/) is a German company that manufactures
          cameras, optical lenses, photographic lenses, binoculars, rifle scopes
          and microscopes. The company was founded by Ernst Leitz in 1869 (Ernst
          Leitz Wetzlar), in Wetzlar, Germany. In 1986, the Leitz company
          changed its name to Leica, due to the fame of the Leica trade-name.
          The name Leica is derived from the first three letters of the
          founder's surname (Leitz) and the first two of the word camera:
          lei-ca (LEItz CAmera). At this time, Leica relocated its factory from
          Wetzlar to the nearby town of Solms. Leica Camera AG is 45% owned by
          The Blackstone Group which licenses the Leica brand name from the
          Danaher Corporation-owned Leica Microsystems GmbH.`}
        </Typography>
        <br />
        <Typography variant="h5">History</Typography>
        <Typography>
          {`From the year 1907 to the 1950s, the buildings that formed Leica
          factory were built on Ernst Leitz Street in Wetzlar, and remained
          until 1986, when the factory was moved to the city of Solms. The
          Wetzlar factory was located on the opposite side of the administrative
          building of 1957 and formed a special urban architecture; it is
          upstream from the slope of Kalsmunt and forms a structurally
          attractive graduation from the skyscrapers to the ruins of Kalsmunt
          Castle. Already in the last decades of the 19th century,[inconsistent]
          Ernst Leitz and its production facilities had moved to the slopes of
          Kalsmunt. In the first years, residential buildings and workshops on
          the Laufdorfer Weg were still sufficient. At the turn of the century,
          the production of optical devices expanded so much that it originated
          the first skyscrapers in the city of Wetzlar. The oldest part of this
          row of tall buildings is now hidden by a new building at the
          Schützenstraße. The first plans of the architect Jean Schmidt in 1907
          show a brick building on a stone base, which was covered by a sloping
          roof and a slate roof. However, in the same year, it was decided to
          use the new construction of concrete skeletons and a simpler façade
          design. The four-story building is divided into six groups of windows,
          each of which has three windows. Narrow wall patterns and lightly
          embedded parapets summarize the three lowest floors. The fourth floor
          is visually separated from the lower part of the building by a very
          distant cornice. On either side of the central building there was a
          hip roof with high ceilings. The mansard's floor expanded as
          production and workers also increased. Only a few years later, Leitz
          again demanded the construction of a tall building. After the planning
          of Jean Schmidt, contractor Robert Schneider built a four-story
          building in 1911.[3] The basement building was made of reinforced
          concrete with brick stairs. Again, the original plan, which provided a
          horizontal structure of the building through the cornucopia, was
          abandoned in favor of a simpler façade design. In the ten-axis
          building, similar to the oldest skyscraper, the lower levels are
          grouped by pilasters. The space between the two skyscrapers (which
          originally had been provided with subsequent buildings) had to be
          closed by another building in the early 1930s. Once again, it was Jean
          Schmidt, who prepared the plans for a first seven-story skyscraper.
          The still existing façade drawings show the columns with arches on the
          ground floor and that are fitted between a long strip of windows with
          excessive pilasters. The general design shows a mixture of very
          graphic elements and remains of curved Modernist forms that recall the
          buildings by Joseph Maria Olbrich at Mathildenhöhe of Darmstadt. In
          1936, the architect presented a completely revised plan. The plan was
          now made up of eight floors for Leica production. The building was
          built with a concrete construction modeled from the production halls
          of Opel in Rüsselsheim, Zeiss in Jena and Wernerwerk in Berlin. It was
          possible to access all the floors through two stairs. The government
          of the city and the district finally approved a construction of eight
          floors with a loggia-like ninth floor, that later was closed. Due to
          the urban landscape that characterized the size of the building, the
          planning of the district government was initially rejected because of
          a simple and unsatisfactory exterior design. Even so, the building was
          built in 1938 between the two oldest skyscrapers. In 1950, west of the
          skyscraper of 1911, a skyscraper of similar construction with nine
          floors was added.[4]`}
        </Typography>
      </div>
    </div>
  );
};

export default Brands;
