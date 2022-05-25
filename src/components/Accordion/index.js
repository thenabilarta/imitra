import {View, Text} from 'react-native';
import React from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import styles from './styles';
import {data} from '../../assets/data';

const Accordion = () => {
  return (
    <View style={styles.collapseContainer}>
      {data.map(d => (
        <Collapse key={d.title}>
          <CollapseHeader>
            <View style={styles.collapseHeader}>
              <Text>{d.title}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            {d.children.map(c => (
              <View style={styles.collapseBody} key={c.text}>
                <Text>{c.text}</Text>
              </View>
            ))}
          </CollapseBody>
        </Collapse>
      ))}
    </View>
  );
};

export default Accordion;
