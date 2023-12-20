import React, { useState } from 'react';

const Problem1 = () => {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Active');
    const [filter, setFilter] = useState('All');

    const submitTask = () => {
        setTasks([...tasks, { name, status }]);
        setName('');
        setStatus('Active');
    };

    const filterTasks = (filterValue) => {
        setFilter(filterValue);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'All') {
            return true;
        } else {
            return task.status === filter;
        }
    }).sort((a, b) => {
        // Custom sorting logic
        if (a.status === 'Active' && b.status !== 'Active') {
            return -1;
        } else if (a.status === 'Completed' && b.status !== 'Completed') {
            return 1;
        } else {
            return 0;
        }
    });

   

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" value={name}s onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="button" onClick={submitTask} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'All' && 'Active'}`} type="button" onClick={() => filterTasks('All')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'Active' && 'Active'}`} type="button" onClick={() => filterTasks('Active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'Completed' && 'Active'}`} type="button" onClick={() => filterTasks('Completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;