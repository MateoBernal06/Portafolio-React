import { Text, Timeline, Card, PanelGroup, Panel } from "rsuite";

export const AlignTimeline = ({ exp }) => (
  <Timeline align="alternate" className="time-line" endless>
    {exp.map((exp) => (
      <Timeline.Item key={exp._id} className="item-timeline" >
        <Card className="card-exp" size="lg">
          <Card.Header>
            <Text size="lg" bold className="title-exp">
              {exp.organization}
            </Text>
          </Card.Header>
          <Card.Body>
            <Text size="lg" bold className="role-exp">
              Cargo: {exp.role}
            </Text>
            <PanelGroup accordion className="accordion-actividates">
              <Panel header="Actividades Realizadas">
                <ul className="responsability-exp">
                  {exp.responsibilities.map((responsability, index) => (
                    <li key={index}>{responsability}</li>
                  ))}
                </ul>
              </Panel>
            </PanelGroup>
          </Card.Body>
          <Card.Footer className="dates-exp">
            <Text muted>
              {exp.start} - {exp.finish}
            </Text>
          </Card.Footer>
        </Card>
      </Timeline.Item>
    ))}
  </Timeline>
);
