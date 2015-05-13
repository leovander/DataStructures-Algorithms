/**
 * @file Node.cpp
 * @author leovander
 * @date 2015-05-10
 */

#include "Node.h"
#include <cstring>

/**
 * constructor
 */
Node::Node(int value) {
  next = NULL;
  data = value;
}

Node::~Node() {}

/**
 * Getter function to return the data member of Node
 * @method Node::value
 * @return {int} data member of Node
 */
int Node::value() {
  return data;
}

/**
 * Setter function to set the data member of Node
 * @method Node::setData
 * @param  {int} value: value to be set to data member variable of Node
 */
void Node::setData(int value) {
  data = value;
}

/**
 * Progressing to the next Node using next pointer
 * @method Node::setNext
 * @param  {pointer} next: pointer to the next Node 
 */
void Node::setNext(Node *next) {
  this->next = next;
}

/**
 * Getter function to return the next pointer of the Node
 * @method Node::getNext
 * @return {pointer} next: 
 */
Node * Node::getNext() {
  return next;
}
