/**
 * @file SinglyLinkedList.h
 * @author leovander
 * @date 2015-05-10
 */

#include "Node.h"
#include <iostream>

#ifndef SINGLYLINKEDLIST_H
#define SINGLYLINKEDLIST_H

class SinglyLinkedList {
public:

	/**
	 * constructor
	 */
	SinglyLinkedList();

	/**
	 * destructor
	 */
	~SinglyLinkedList();

	/**
	 * Add a Node to the front of the linked list, with the given value
	 * @method SinglyLinkedList::insertFront
	 * @param  {int} value: the value to be added to the front of the linked list
	 */
	void insertFront(int value);

	/**
	 * Delete a Node based on the give value
	 * @method SinglyLinkedList::deleteNode
	 * @param  {int} value [description]
	 * @return {bool} true if the delete succeed, false otherwise
	 */
	bool deleteNode(int value);

	/**
	 * Print data member of all Nodes of the linked list
	 * @method SinglyLinkedList::printList
	 * @return {string} output of the linked list
	 */
	std::string printList();
	
private:
	Node *head;
	int length;
};

#endif
