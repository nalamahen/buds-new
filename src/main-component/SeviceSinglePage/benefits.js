import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Benefits = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="wpo-benefits-section">
      <h2>Benefits</h2>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="wpo-benefits-item">
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={''}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>Empowering Children Through Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  By providing access to quality education, we equip children
                  with the knowledge and skills they need to break the cycle of
                  poverty. Education helps open doors to opportunities, enabling
                  them to build better futures for themselves and their
                  communities.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={''}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>Safe and Supportive Living Environment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our accommodation offers a nurturing space where children can
                  focus on their studies without the worries of homelessness or
                  unsafe conditions. This stable environment fosters growth and
                  learning.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={''}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography>Holistic Development</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Beyond academics, we nurture children’s emotional and social
                  well-being, helping them develop into well-rounded individuals
                  ready to contribute positively to society.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={''}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>
                  Nourishing Children Through Food and Nutrition
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We provide nutritious meals to ensure that every child
                  receives the essential nourishment needed for their physical
                  and mental growth. Our focus on balanced diets helps prevent
                  malnutrition and promotes healthier, more active lives. Proper
                  nutrition not only fuels their energy for learning but also
                  contributes to better concentration and overall well-being. By
                  supporting our food and nutrition program, you help children
                  thrive in both their education and daily lives, giving them
                  the strength to pursue brighter futures.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
