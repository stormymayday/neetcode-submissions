class ListNode:

    def __init__(self, key = None, val = None, next = None):
        self.key = key
        self.val = val
        self.next = next

class MyHashMap:

    def __init__(self, size = 10000):
        self.size = size
        self.data = [ListNode() for _ in range(self.size)]
        
    def put(self, key: int, value: int) -> None:

        prev = self.data[key % self.size]
        head = prev.next

        while head:
            if head.key == key:
                head.val = value
                return
            prev = head
            head = head.next

        new_node = ListNode(key, value)
        prev.next = new_node
        return
        
    def get(self, key: int) -> int:

        head = self.data[key % self.size]

        while head:
            if head.key == key:
                return head.val
            head = head.next

        return -1
        
    def remove(self, key: int) -> None:

        prev = self.data[key % self.size]
        head = prev.next

        while head:
            if head.key == key:
                prev.next = head.next
                head.next = None
                return
            prev = head
            head = head.next
        
        return
        

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)