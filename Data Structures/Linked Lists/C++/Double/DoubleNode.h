/**
 * @file Node.h
 * @author leovander
 * @date 2015-05-17
 */

#ifndef DOUBLENODE_H
#define DOUBLENODE_H

#include "Node.h"

class DoubleNode : public Node {
public:
  DoubleNode(int value);
  ~DoubleNode();
  void setPrevious(DoubleNode *previous);
  DoubleNode *getPrevious();
private:
  DoubleNode *previous;
};

#endif
