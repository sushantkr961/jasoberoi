import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CommentProps {
    blogId: string;
}

interface ValidationError {
    name?: string;
    email?: string;
    content?: string;
}

type Comment = {
    _id: string;
    name: string;
    content: string;
    email: string;
};

const Comment: React.FC<CommentProps> = ({ blogId }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [errors, setErrors] = useState<ValidationError>({});
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [comments, setComments] = useState<Comment[]>([]);
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 3;

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        let validationErrors: ValidationError = {};
        if (!name) validationErrors.name = 'Name is required';
        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email address';
        }
        if (!content) validationErrors.content = 'Content is required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
        } else {
            setErrors({});
            try {
                const data = new URLSearchParams();
                data.append('name', name);
                data.append('email', email);
                data.append('content', content);
                data.append('blogId', blogId);

                const response = await axios.post('/api/admin/comments', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });

                if (response.data.success) {
                    setMessage('Comment added successfully!');
                    setName('');
                    setEmail('');
                    setContent('');
                    // Add the new comment to the beginning of the comments array
                    const newComment: Comment = {
                        _id: response.data.comment._id,
                        name: response.data.comment.name,
                        email: response.data.comment.email,
                        content: response.data.comment.content,
                    };
                    setComments([newComment, ...comments]);
                } else {
                    setMessage('Failed to add comment');
                }
            } catch (error) {
                console.error('There was an error submitting the form:', error);
                setMessage('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };



    const loadComments = async () => {
        try {
            const response = await axios.get(`/api/admin/comments/blogcomments?blogId=${blogId}`);
            const fetchedComments: Comment[] = response.data
            setComments(fetchedComments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        loadComments();
    }, []); // Reload comments when page changes

    const displayedProperties = comments.slice(0, page * itemsPerPage);


    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <div className="comments">
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-8">Comments</h5>
                {comments.length > 0 && (
                    comments.map((comment) => (
                        <div key={comment._id} className="flex flex-col sm:flex-row gap-x-9 gap-y-4 w-full mb-7 bg-slate-50 p-4 rounded-md">
                            <div className="data w-full">
                                <div className="flex items-center justify-between w-full mb-3">
                                    <div className="user">
                                        <h6 className="font-medium text-xl leading-8 text-black mb-1">{comment.name}</h6>
                                        <p className="font-normal text-sm leading-6 text-gray-500">{comment.email}</p>
                                    </div>
                                </div>
                                <p className="font-normal text-base leading-7 text-gray-600">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    ))
                )}
                {comments.length > displayedProperties.length && (
                    <div className="w-full flex justify-center ">
                        <button
                            className="mt-8 py-2 px-4   border  rounded-md bg-black text-white hover:bg-gray-800"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            <div>
                <div>
                    <h5 className="font-medium text-2xl leading-8 text-gray-900 mb-4 md:mb-6">Join The Discussion</h5>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className="reply bg-gray-100 rounded-md p-5 border border-solid border-gray-300 w-full">
                            <div className="flex items-center gap-x-9 gap-y-4 flex-col sm:flex-row mb-5">
                                <textarea
                                    className="font-medium text-md border-none focus:ring-0 outline-none focus:shadow-none active:outline-none focus:outline-none focus:border-none active:border-none md:text-lg leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full md:h-28"
                                    placeholder="Join The Discussion"
                                    style={{ border: 'none !important', outline: 'none !important' }}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    maxLength={50} // Maximum character limit
                                ></textarea>
                            </div>
                            {errors?.content && <p className="text-red-500 text-sm">{errors?.content}</p>}
                        </div>
                        <div className='flex gap-2 flex-col md:flex-row'>
                            <div className='w-full'>
                                <input
                                    className="bg-gray-100 rounded-md py-1 px-2 border border-solid border-gray-300 font-medium text-sm md:text-md leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className='w-full'>
                                <input
                                    className="bg-gray-100 rounded-md py-1 px-2 border border-solid border-gray-300 font-medium text-sm md:text-md leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-black md:max-w-[160px] rounded-md py-2 px-10 font-poppins text-white"
                        >
                            {loading ? "Loading" : "Join"}
                        </button>
                        {message && <p className="text-green-500 text-sm">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Comment;