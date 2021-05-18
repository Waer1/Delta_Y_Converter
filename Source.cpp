int cnt = 0;
if (root == nullptr)
cout << "NULL tree";

queue<Node*> curlevel;

curlevel.push(root);

while (!curlevel.empty())
{
	int size = curlevel.size();
	int n = size;
	int sum = 0;
	cnt = 0;

	while (n--)
	{
		Node* node = curlevel.front();
		curlevel.pop();

		if (n == size - 1 || n == 0) {
			cout << node->getdata() << " ";
			cnt++;
			sum += node->getdata();
		}

		if (root->getdata() == node->getdata())
			cout << root->getdata() << " " << (root->getdata() * 2) << " ";
		if (cnt == 2)
			cout << sum << " ";

		if (node->getleft() != nullptr)
			curlevel.push(node->getleft());

		if (node->getright() != nullptr)
			curlevel.push(node->getright());

	}


}
