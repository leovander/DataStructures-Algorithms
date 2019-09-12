#include "DoubleNode.h"

DoubleNode::DoubleNode(int value) : Node(value) { }

DoubleNode::~DoubleNode() { }

void DoubleNode::setPrevious(DoubleNode *previous) {
  this->previous = previous;
}

DoubleNode * DoubleNode::getPrevious() {
  return previous;
}
