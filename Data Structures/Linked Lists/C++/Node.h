/**
 * @file Node.h
 * @author leovander
 * @date 2015-05-10
 */


#ifndef NODE_H
#define NODE_H

class Node {
public:
  /**
  * constructor
  */
  Node(int value);

  ~Node();

  /**
  * Getter function to return the data member of Node
  * @method Node::value
  * @return {int} data member of Node
  */
  int value();

  /**
  * Setter function to set the data member of Node
  * @method Node::setData
  * @param  {int} value: value to be set to data member variable of Node
  */
  void setData(int value);

  /**
  * Progressing to the next Node using next pointer
  * @method Node::setNext
  * @param  {pointer} next: pointer to the next Node
  */
  void setNext(Node *next);

  /**
  * Getter function to return the next pointer of the Node
  * @method Node::getNext
  * @return {pointer} next:
  */
  Node *getNext();

private:
  int data;
  Node *next;
};

#endif
